import Link from 'next/link';
import React, { PureComponent } from 'react';
import Layout from '../components/Layout';
import fetchTimeSeriesData from '../components/utils/Helpers';

class Timeseries extends React.Component {

  static getInitialProps({query}) {
    console.log(query);

    return {query}
  }

  render() {
    console.log(this.props.query) // The query is available in the props object
    return(
      <Layout>
        {/*
          <style jsx>
            {`
              a {
                text-decoration: none;
              }
              a:hover {
                opacity: 0.6;
              }
            `}
          </style>
        */}

        {/* Breadcrumb */}
        <section className="section m-t-50 m-b-5 bcclear p-b-15">
          <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                  <nav className="breadcrumb m-t-10" aria-label="breadcrumbs">
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/indicators"><a>All indicators</a></Link></li>
                        <li><Link href={"/indicator/"+this.props.query.id}>
                            <a>
                                {this.props.query.id} &nbsp;
                            </a>
                        </Link></li>
                        <li className="is-active">
                          <a aria-current="page">
                            TimeSeries
                          </a>
                        </li>
                    </ul>
                  </nav>
                </div>
                <div className="column text-right">
                  <Link href={"/timeseries?id="+this.props.query.id+"&ouid="+this.props.query.ouid+"&level="+this.props.query.level+"&pe="+this.props.query.pe}>
                    <a className="is-link">&larr; Back to indicator summary</a>
                  </Link>
                </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb */}



      </Layout>
    );

  }
}

export default Timeseries;