package middleware

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

// func TestRequestAuthValidToken(t *testing.T) {
// 	// Setup a Gin context and a recorder for testing HTTP requests and responses
// 	w := httptest.NewRecorder()
// 	c, _ := gin.CreateTestContext(w)

// 	// Mocking a valid token
// 	validToken := "your_valid_token"
// 	c.Request = httptest.NewRequest(http.MethodGet, "/", nil)
// 	c.Request.Header.Set("Cookie", "Authorization="+validToken)

// 	// Call the middleware function
// 	RequestAuth(c)

// 	// Assert that the status code is OK
// 	assert.Equal(t, http.StatusOK, w.Code)

// 	// Assert that the "user" key is set in the Gin context
// 	user, exists := c.Get("user")
// 	assert.True(t, exists)
// 	assert.NotNil(t, user)
// 	// You can perform more specific assertions on the "user" variable if needed.
// }

func TestRequestAuthExpiredToken(t *testing.T) {
	// Setup a Gin context and a recorder for testing HTTP requests and responses
	w := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(w)

	// Mocking an expired token
	expiredToken := "your_expired_token"
	c.Request = httptest.NewRequest(http.MethodGet, "/", nil)
	c.Request.Header.Set("Cookie", "Authorization="+expiredToken)

	// Call the middleware function
	RequestAuth(c)

	// Assert that the status code is Unauthorized
	assert.Equal(t, http.StatusUnauthorized, w.Code)

	// Assert that the "user" key is not set in the Gin context
	_, exists := c.Get("user")
	assert.False(t, exists)
}
