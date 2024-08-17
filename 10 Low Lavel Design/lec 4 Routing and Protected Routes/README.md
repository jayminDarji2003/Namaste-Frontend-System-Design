# Routing and Protected routes

## Protected routes

1. Way 1 (Bad way)

   -> here we are first check if isAdmin true if it is true then load Admin component else load Login component

   -> why it is bad way of doing protected route because the when the isAdmin is false load the login component but url is not changed.

```
    <Route path="/admin" element={
        isAdmin ? <Admin /> : <Login />
        }
    />
```
