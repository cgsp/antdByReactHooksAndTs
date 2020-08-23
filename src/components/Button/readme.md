- 使用示范
  ```bash
  function App() {
    return (
      <div className="app">
        <Button
          autoFocus
          className="customer"
          onClick={(e) => console.log('哈哈1', e)}
          btnType={ButtonType.Default}
          size={ButtonSize.Small}
        >
          Hello
        </Button>
        <Button disabled btnType={ButtonType.Default} size={ButtonSize.Small}>
          Disabled Button
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small Danger
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Small}
          href="http://www.baidu.com"
          target="_blank"
        >
          Baidu Link
        </Button>
        <Button
          btnType={ButtonType.Link}
          size={ButtonSize.Small}
          href="http://www.baidu.com"
          disabled
        >
          Disabled Link
        </Button>
      </div>
    )
}
  ```
