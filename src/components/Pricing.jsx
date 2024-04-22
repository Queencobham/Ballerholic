const Pricing = () => {
  return (
    <div className="pricing">
      <h3>Pricing</h3>
      <div className="pricing-flex">
        <div className="pricing-flex-grp">
          <h4>Business plan</h4>
          <p className="mth">$10/mth</p>
          <p className="pricing-text">Tortor diam at arcu volutpat. Facilisis</p>
          <span className="ticked-text">
            <p>Eget dui ut cursus neque</p>
            <p>Diam adipiscing libero nunc</p>
            <p>Vel pellentesque leo</p>
            <p>Risus eget purus laoreet enim</p>
            <p>Malesuada quis nunc nunc</p>
          </span>
        </div>

        <div className="pricing-flex-grp">
          <h4>Business plan</h4>
          <p className="mth">$30/mth</p>
          <p className="pricing-text">Varius id metus iaculis adipiscing.</p>
          <span className="ticked-text">
            <p>Consectetur nisi eget</p>
            <p>Cursus egestas nunc a velit.</p>
            <p>Sapien consequat in sed</p>
            <p>Eu enim ullamcorper sit risus</p>
            <p>Morbi consequat feugiat</p>
          </span>
        </div>

        <div className="pricing-flex-grp flex-grp-3">
          <h4>Business plan</h4>
          <p className="mth">$50/mth</p>
          <p className="pricing-text">Bibendum neque elementum semper</p>
          <span className="ticked-text">
            <p>Penatibus rutrum mattis</p>
            <p>Mollis mollis nam sit sit</p>
            <p>Lobortis neque diam</p>
            <p>Turpis feugiat diam imperdiet</p>
            <p>Gravida viverra sapien</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Pricing

