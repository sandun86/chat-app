package middleware

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"

	"user/initializers"
	"user/models"
)

func RequestAuth(c *gin.Context) {
	fmt.Println("Auth Middleware")

	tokenString, err := c.Cookie("Authorization")

	if err != nil {
		fmt.Println("Auth Middleware222")
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	fmt.Println("Auth Middleware33", tokenString)
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		fmt.Println("Auth Middleware44")
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		fmt.Println("Auth Middleware55")
		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(os.Getenv("SECRET")), nil
	})
	fmt.Println("Auth Middleware66")
	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		fmt.Println("Auth Middleware77")
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		var user models.User

		initializers.DB.First(&user, claims["sub"])

		if user.ID == 0 {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		fmt.Println("Auth Middleware77")
		c.Set("user", user)
		fmt.Println("Auth---->", user.ID)
		c.Next()
	} else {
		fmt.Println("Auth Middleware88")
		c.AbortWithStatus(http.StatusUnauthorized)
	}

}
