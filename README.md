#VUI Focus

This library contains uncompiled LESS and compiled CSS which can be used to
apply an outline style to elements when they receive focus. This accessibility
feature helps identify to the user which element currently has focus.

In most cases, you'll want to use this library on elements which do not already
have a visible or obvious focus indicator. This typically includes links,
checkboxes and radio inputs.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-focus
```

##LESS Mixin

In LESS, call `vui-focusOutline()` mixin from your CSS selector, usually with
the `focus` pseudo-selector applied:

    a:focus {
      .vui-focusOutline();
    }

You can also access the color used for the outline through the LESS variable 
`vui-focusColor`:

    div {
      border: 1px solid @vui-focusColor;
    }

#CSS

If you'd prefer to use plain CSS instead of LESS, bundle up the provided 
`focus.css` file with your application's CSS. Then apply the CSS class
`vui-outline` to any element in your HTML. When that element receives focus, 
the outline style will be applied automatically.

    <a class="vui-outline">my link</a>