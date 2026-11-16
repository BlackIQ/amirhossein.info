---
date:
  created: 2026-11-16
  updated: 2026-11-16
authors:
  - amirhossein
categories:
  - Go
  - Backend
  - Gin
tags:
  - Go
  - Gin
comments: true
---

# Gin Backend Framework Context Cheat Sheet

A fast and usefull cheat sheet for how to use **Gin**.

First, what is **Gin**?

> The fastest full-featured web framework for Go. Crystal clear.
>
> Source: [Official Gin website](https://gin-gonic.com/en/)

Let's start. I'll write things about how to use **Gin**, what are important things about in and of course about the **Gin Context**.

Are you ready?

<!-- more -->

## What is Gin Context?

_Every Gin handler receives a `\*gin.Context`, which wraps Go’s standard context.Context along with request and response helpers. Understanding how to use the underlying context correctly is essential for building production applications that handle timeouts, cancellation, and resource cleanup properly._

I also copied it from the documentation of **Gin**. [Source](https://gin-gonic.com/en/docs/server-config/context/)

So, as it said, **Context** carries everything inside it. Examples:

- Request
- Response
- URL
- Params
- Query Strings
- Body
- Header
- Functions
- And also things we put inside it to pass to the next step

Every handler has a sign like this:

```go
func MyHandler(c *gin.Context) {
  // ...
}
```

Remember this handler, every example is inside it.

## Receive request

Here we will cover how to access data of the request. In body, url and even header.

### Path Parameters

You know what is path parameters, right? If you don't know it's alright. Path parameter is a variable inside the url. For example: `/api/posts/:id`. See, the `:id` means here will be a variable. Then we can find it and use it as we need.

In **Gin** it's kind of very easy!

```go
id := c.Param("id")
```

You can convet it to anything you want. Default is string. Convert it as UUID, Integer or what ever.

### Query String

Have you seen those question marks and & signs in a url? They are query string and we can use them to get a structured data from url. Consider we want to have filter and sort. Where should we pass our data? Yaeh, in query string!

For example consider this url: `/search?q=golang&page=2`

```go
q := c.Query("q")
page := c.DefaultQuery("page", "1")
```

We use `c.Query("q")` to get data of `q`. For now it is `golang`. If there be no `q` inside the url the result is an empty string. Just `""`

But sometimes we don't need that result to be an empty string. We want if there be no result, set our default value. Look at the url again. We have `page`. Now it is 2 but consider there be no `page` at url. What should happen? **PANIC**!? No! We set our default value with `c.DefaultQuery("page", "1")`. It means give me `page` but if it is not set, it's alright to give me `1`.

### Header

Headers are variables inside every request. They can give you information and data about the client, the response and many other things. They are not in url, not in body and not in form. They are at headers part of the request.

```go
token := c.GetHeader("Authorization")
requestID := c.GetHeader("X-Request-ID")
```

You should use `c.GetHeader("name")` to get data of a header that the key is `name`.

### Body

The raw data that client sends. For now only we work with `JSON`. As an example imagine a login endpoint that client sends password and username.

```json
{
  "username": "amirhossein",
  "password": "hossein_amir"
}
```

Alright, client sent it, **Gin** handled it and passed it to our handler to read it.

```go
type CreateUserRequest struct {
  Name  string `json:"name" binding:"required"`
  Email string `json:"email" binding:"required,email"`
}

var req CreateUserRequest
if err := c.ShouldBindJSON(&req); err != nil {
  c.JSON(400, gin.H{"error": err.Error()})
  return
}
```

So, we created out based data with a struct. We call it `CreateUserRequest`. Then we create a base variable as struct and call it `req`. Now we need to validate it. To validate and store request body in `req` we use `c.ShouldBindJSON`. It gets out base variable. If we have error, it means something is wrong. Else we got out data!

Also we have other binds to:

- `c.ShouldBindQuery` to bind query string.
- `c.ShouldBind` to bind auto.

## Send response

Until now we understood how to get our data, parse it, change and other things. Now it's time to send out response.

### JSON

The most common way in a **REST API** to send response is as **Json**.

```go
c.JSON(
  200,
  gin.H{
    "message": "success",
    "data":    user,
  }
)
```

Ok, but how is it working?

First argument is status code. You can put integer inside it like `200` or using `net/http` like `http.StatusOK`.

Second argument is the data as `json`. We can use `gin.H{}` to put out data there. For example I sent a message and user data.

Or you can put your own struct instead of using `gin.H{}` like this;

```go
c.JSON(http.StatusOK, user)
```

As you can see I used `net/http` and my own struct.

### String

The function `c.String` only returns a string. Easy!

```go
c.String(200, "pong")
```

### HTML

If you want to send a HTML page use `c.HTML`.

```go
c.HTML(200, "index.html", gin.H{"title": "Home"})
```

### Data

Consider sending a buffer data using `c.Data`.

```go
c.Data(200, "application/octet-stream", []byte{...})
```

### File

Sending back file is very important in some cases. Use `c.File`.

```go
c.File("/path/to/file.pdf")
```

### Redirect

Also redirect is simple using `c.Redirect`. Just put your path.

```go
c.Redirect(302, "/login")
```

### Status

Here is something very usefull to know. Sometimes you have no content as response. Like you deleted something and want to say yes it is deleted. How!? Only send a no content status using `c.Status`.

```go
c.Status(204)
```

### Abort

Remember this part. You really should know about `c.Abort`.

What is abort? When we want to stop the request from going further we need to use `c.Abort`. Look at these 3 codes:

The only abort. Stops.

```go
c.Abort()
return
```

Now we stop the request and tell client why we did that with status code.

```go
c.AbortWithStatus(401)
return
```

We stoped the request, we told client why with a status code and now let's tell them why in human language.

```go
c.AbortWithStatusJSON(403, gin.H{"error": "Forbidden"})
return
```

Don't forget to put `return` after `c.Abort`. IMPORTANT!

## Using Context

Sometimes we have a middleware. It may authenticate use and we want to pass use data to the handler. At this section we will learn how to use **Context** to do that for us.

### Write data to Context

This step is the middleware part and we set data using `c.Set(key, value)` as key-value pair.

```go
// Middleware

c.Set("name", "Amirhossein")
```

### Read data from Context

Next step is at the handler that wants to read data which is set at last step (middleware). We can do it with `c.Get("key")`.

```go
// Handler

name, exists := c.Get("name")

if !exists {
  // Here means name is not exists
}

fmt.Println(name)
```

## Middlrwares

Middlewares are functions that they run after or before handlers. We may have many middlewares between the server and the handler.

Here is a brief of how can we create a middleware.

```go
func AuthMiddleware() gin.HandlerFunc {
  return func(c *gin.Context) {
    token := c.GetHeader("Authorization")

    if token == "" {
      // We don't have token for example and we need to abort it
      c.AbortWithStatusJSON(
        401, // Status code
        gin.H{
          "error": "Unauthorized"
        }, // Json
      )
      return
    }

    // This point means everything is OK

    c.Set("userID", "123") // Example of setting things in Context

    c.Next() // Go to next step
  }
}
```

To go to the next step we use `c.Next`. Like Js frameworks like `ExpressJs`.

So don't forget:

- `c.Next()` -> Continue
- `c.Abort()` -> Break

## Routing

We know what is a response, request, context and middleware in **Gin**. But where is the core which must run our app!?

Yes, **Routing**!

Routing is the part that decides which handler should run for which URL and which HTTP method.

### Basic Routing

```go
r := gin.Default()

r.GET("/ping", func(c *gin.Context) {
  c.JSON(200, gin.H{"message": "pong"})
})

r.POST("/users", createUser)
r.GET("/users/:id", getUser)
```

`gin.Default()` creates a router with Logger and Recovery middleware already attached.

### Grouping Routes

When you have many endpoints, grouping them makes your code much cleaner.

```go
api := r.Group("/api")
{
  api.GET("/todos", listTodos)
  api.POST("/todos", createTodo)
}

// Group with middleware
admin := r.Group("/admin", AuthMiddleware())
{
  admin.GET("/dashboard", dashboard)
  admin.DELETE("/users/:id", deleteUser)
}
```

You can even nest groups:

```go
v1 := r.Group("/api/v1")
{
  todos := v1.Group("/todos")
  {
    todos.GET("", listTodos)
    todos.POST("", createTodo)
  }
}
```

## HTTP Methods

In REST APIs we mostly use these five methods. Let’s quickly see what each one means.

### GET

Used to **read** data. It should not change anything on the server.

```go
r.GET("/todos", listTodos)
r.GET("/todos/:id", getTodo)
```

### POST

Used to **create** a new resource or pass something in a secure way.

```go
r.POST("/todos", createTodo)
```

### PUT

Used to **full updates**. An entire resource.

When you use `PUT`, the client is expected to send the **complete** object. If a field is missing, it usually means that field should be cleared or reset.

```go
r.PUT("/todos/:id", replaceTodo)
```

### PATCH

Used for **partial update**. A part of resource.

With `PATCH`, the client only sends the fields that need to be changed. The rest of the resource stays untouched.

```go
r.PATCH("/todos/:id", updateTodo)
```

### DELETE

Used to **delete** a resource.

```go
r.DELETE("/todos/:id", deleteTodo)
```

---

## Conclusion

That’s it for this cheat sheet.

We covered the most important parts of **Gin**:

- What `gin.Context` is and why it’s so powerful.
- How to read data from request (params, query, headers, body).
- How to send different kinds of responses.
- Working with middlewares.
- Routing and grouping endpoints.
- HTTP methods.

This should be enough to start building real APIs with Gin confidently.

In the next posts, I’ll write about:

- Validation in Gin.
- How to structure a clean project.
- GORM the ORM for Go.
- Authentication with JWT.

If you found this useful, feel free to share it. And if you have any questions, just drop a comment.

Thanks for reading.

Happy coding.
