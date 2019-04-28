# Bootstrap zxcvbn

> We love open-source so we open source one of our packages 🎉.

A `jQuery` plugin to calculate password strength estimation using zxcvbn and bootstrap 4 progress-bar

<p align="center"><a href="https://routekick.github.io/bootstrap-zxcvbn/" target="_blank" rel="noopener noreferrer"><img  src="https://user-images.githubusercontent.com/17254073/56864595-008d8e80-69cd-11e9-8924-fe7df3ce9d0f.gif" alt="Bootstrap zxcvbn demo"></a></p>

## Install

+ Copy the cdn URL for `bootstrap-zxcvbn.jquery.js` file and insert them into your html file

    ```html
    <!-- Don't forget to add it after jQuery, Bootstrap and zxcvbn -->
    <script src="https://cdn.jsdelivr.net/gh/routekick/bootstrap-zxcvbn@1.1.0/bootstrap-zxcvbn.jquery.js"></script>
    ```

## Usage

1. Include `jQuery`, `Bootstrap` and `zxcvbn` into the header of your html file:

    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/zxcvbn@4.4.2/dist/zxcvbn.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"></script>
    ```

2. Adding to the DOM:
    + It only needs a bootstrap 4 [progress bar](https://getbootstrap.com/docs/4.3/components/progress/) and an input with unique IDs

3. When the DOM is ready call the plugin

    ```JavaScript
    $('#progressID').zxcvbnProgress({
        passwordInput: '#passwordID'
    });
    ```

## Options

+ You can pass an array to change the rating localization or the progress classes

    ```JavaScript
    $('#progressID').zxcvbnProgress({
        passwordInput: '#passwordID',
        ratings: ["Very weak", "weak", "OK", "Strong", "Very strong"],
        progressClasses: ['bg-danger', 'bg-warning', 'bg-warning', 'bg-success', 'bg-success']
    });
    ```
