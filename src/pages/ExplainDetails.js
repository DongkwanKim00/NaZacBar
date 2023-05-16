import React from 'react';
import './explainDe.css';

const ExplainDetails = (props) => {

  const { open, close, header } = props;

  return (
   
    <div className={open ? 'openExplainDe explainDe' : 'explainDe'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
export default ExplainDetails;