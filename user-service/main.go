package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"user/controllers"
	"user/initializers"
	"user/middleware"
)

func init() {
	fmt.Println("init called")
	initializers.LoadEnvVariables()
	initializers.ConnectionDB()
	initializers.SyncDatabase()
}

func main() {
	fmt.Println("Hello world")
	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ping",
		})
	})

	router.POST("/sign-up", controllers.SignUp)
	router.POST("/login", controllers.Login)
	router.GET("/validate", middleware.RequestAuth, controllers.Validate)

	router.POST("/chat-message", middleware.RequestAuth, controllers.Store)

	router.Run()
}

func OptionMessage(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "http://localhost:3004")
}

// func EnableCors(w *http.ResponseWriter) {
// 	(*w).Header().Set("Access-Control-Allow-Origin", "*")
// }
