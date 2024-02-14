package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Store(c *gin.Context) {
	var body struct {
		Message string
		Type    int
		Url     string
	}

	if c.Bind(&body) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read body",
		})
		return
	}

	// chatMessage := models.ChatMessage{Message: body.Message, Type: body.Type, Url: body.Url}

	// result := initializers.DB.Create(&chatMessage)

	// if result.Error != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to save message"})

	// 	return
	// }

	c.JSON(http.StatusOK, gin.H{"message": "Message has successfully saved"})
}
