class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
      return product.id === productId
        ? Object.assign({}, product, { votes: product.votes + 1 })
        : product;
    });
    this.setState({ products: nextProducts });
  };

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);

    const productComponents = products.map(product => {
      const {
        id,
        title,
        description,
        url,
        votes,
        submitterAvatarUrl,
        productImageUrl
      } = product;

      return (
        <Product
          key={"peoduct-" + id}
          id={id}
          title={title}
          description={description}
          url={url}
          votes={votes}
          submitterAvatarUrl={submitterAvatarUrl}
          productImageUrl={productImageUrl}
          onVote={this.handleProductUpVote}
        />
      );
    });

    return <div className="ui unstackable items">{productComponents}</div>;
  }
}

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };

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
            <a onClick={this.handleUpVote}>
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
