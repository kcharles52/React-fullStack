class ProductList extends React.Component {
  render() {
    const {
      id,
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = Seed.products[0];

    return (
      <div className="ui unstackable items">
        <Product
          id={id}
          title={title}
          description={description}
          url={url}
          votes={votes}
          submitterAvatarUrl={submitterAvatarUrl}
          productImageUrl={productImageUrl}
        />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    const {
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = this.props;

    return (
      <div className="item">
        <div className="image">
          <img src={productImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a>
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
