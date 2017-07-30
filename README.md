# ReactFacebookSignIn
Facebook React Login Component.

# Install
```
yarn add react-facebook-signin
```

# Use with ES6
```
import FacebookSignIn from 'react-facebook-signin';

// https://developers.facebook.com/docs/facebook-login/web/login-button
<FacebookSignIn
    appId="948794879487"        // your-app-id
    xfbml={false}               // true / false
    language="zh_TW"            // your-location-language
    buttonSize="large"          // small / medium / large
    buttonTextType="login_with" // login_with / continue_with
    isShowFaces={false}         // true / false
    showMaxFaces={1}            // 1, 2, 3...
    signInResponse={this.foo}   // your function
/>
```

### License

react-facebook-signin is released under the [Apache 2.0 license](LICENSE).

```
Copyright 2017 Johnny Chu<chuhsun@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
