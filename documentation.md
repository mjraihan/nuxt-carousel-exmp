#Dokumentasi

###library FETCH
pengunaan library FETCH
support
GET, POST, DELETE, PUT

```
 let post = this.lib().ajax.fetch(
    'POST',
    `${this.$config.apiBaseUrl}/v1/customer/forgot-password`
    )
    post
    .then(response => {
        console.log(response)
        if (response.isSuccess === true) {
        } else {
        }
    })
    .catch(e => {})
```

###library FETCH
