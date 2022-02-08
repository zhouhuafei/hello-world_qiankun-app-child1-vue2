# config是scss的配置目录

# common是公共样式目录

# 组件基本约定
* 1、组件根元素不允许有margin。
* 2、半透明遮罩的z-index为500。透明遮罩的z-index为999。
* 3、(组件样式和全局样式)ui样式全部以```g-```开头。
* 4、命名使用长链接命名法。
    - 如果实在嫌名字太长，子元素可使用下划线开头的方式命名。```_icon```。
    - 如果实在嫌名字太长，子元素可使用中划线开头的方式命名。```-icon```。
    - 如果实在嫌名字太长，可使用BEM方式命名。```g-btn--icon```。
* 5、状态类命名方式如右：```g-btn g-btn_hollow```。
* 6、使用了```padding```的地方，全都要加```box-sizing: border-box;```。
    - 后续如果做成ui库，可以防止第三方用户全局使用```border-box```导致我们的ui库变形。
* 7、如果做成ui库，则ui库中就不允许出现任何和清零样式有关的独立样式和工具样式。
    - 可使用scss的mixin或者占位符对组件进行单独的样式重置。建议使用占位符，因为生成的样式文件会相对较少。
    - 以下是占位符案例。
    ```
    %reset-a {
        color: inherit;
        outline: none;
        text-decoration: none;
    }

    %reset-img {
        border: none;
        vertical-align: middle;
        max-height: 100%;
        max-width: 100%;
    }
    ```
* 8、ui库中理应不需要关注字体，字体应该根据使用者配置的字体而走。
    - 无需关注字体类型。
    - 需要关注字体大小。
