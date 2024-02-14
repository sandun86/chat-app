package initializers

import (
	"user/models"
)

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})
}
