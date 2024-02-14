package models

import "gorm.io/gorm"

type ChatMessage struct {
	gorm.Model
	Message string `gorm:"unique"`
	Type    int
	Url     string
}
