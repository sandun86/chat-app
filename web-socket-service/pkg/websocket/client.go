package websocket

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
}

type Message struct {
	UserID string `json:"user_id"`
	Type   int    `json:"type"`
	Body   string `json:"body"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		_, p, err := c.Conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}

		var msg Message
		err = json.Unmarshal(p, &msg)
		if err != nil {
			fmt.Println(err)
			return
		}

		c.Pool.Broadcast <- msg
		fmt.Printf("Message Received: %+v\n", msg)
	}
}
