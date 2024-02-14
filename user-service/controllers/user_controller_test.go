package controllers

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/DATA-DOG/go-sqlmock"
	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"github.com/stretchr/testify/assert"

	"user/initializers"
)

func TestSignUpSuccess(t *testing.T) {
	// Setup a Gin context and a recorder for testing HTTP requests and responses
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	// Mocking a valid request body
	validRequestBody := `{"Email": "test@example.com", "Password": "password123"}`
	c.Request = httptest.NewRequest(http.MethodPost, "/signup", bytes.NewBufferString(validRequestBody))
	c.Request.Header.Set("Content-Type", "application/json")

	// Create a mock DB connection
	mockDB, mock, err := sqlmock.New()
	assert.NoError(t, err)

	// Replace the global DB instance with the mock
	db := sqlx.NewDb(mockDB, "sqlmock")
	initializers.DB = db

	// Expect the SQL query for user creation
	mock.ExpectExec("INSERT INTO users").WithArgs("test@example.com", sqlmock.AnyArg()).WillReturnResult(sqlmock.NewResult(1, 1))

	// Call the SignUp function
	SignUp(c)

	// Assert that the status code is OK
	assert.Equal(t, http.StatusOK, w.Code)

	// Assert that the mock expectations were met
	assert.NoError(t, mock.ExpectationsWereMet())
}

func TestValidate(t *testing.T) {
	// Setup a Gin context and a recorder for testing HTTP requests and responses
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	// Call the Validate function
	Validate(c)

	// Assert that the status code is OK
	assert.Equal(t, http.StatusOK, w.Code)
}
