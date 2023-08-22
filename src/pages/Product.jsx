import React from "react";
import { cardsData } from "../data";
import Card from "./Card";

const Product = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="">
        <div className="text-center align-center">
          <div className="flex justify-center items-center mt-3 mb-4">
            <img src="/assets/img/AgenSQL-Logo.png" alt="Agen SQL" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">
            An integration of Bitnine's DB technology and PG expertise
          </h2>
          <p className="mt-4">
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise
            <br />
            and knowledge accumulated through database research and development.
          </p>
          <p className="mt-4">
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures <br />
            the efficiency and scalability of data management.
          </p>
          <p className="mt-4">
            Get AgensSQL now for stable operation and management services at a
            reduced
            <br />
            maintenance cost.
          </p>
          <div className="flex justify-center items-center">
            <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
              CONTACT
            </button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
              BROCHURE
            </button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-md m-6">
              BLOG
            </button>
          </div>
        </div>
        <div>
          <div className="text-center mt-8">
            <img
              src="/assets/img/agens-package.png"
              alt="All-in-one-installation"
              className="mx-auto"
            />
          </div>

          <div className="mt-8  text-center">
            <h1 className="text-3xl font-semibold">Key features</h1>
            <p className="mt-4">
              Manage your data with Agens Enterprise Package
            </p>
            <p className="">
              Essential enterprise features such as high availability and
              sharding are provided
            </p>
            <div className="items-center ml-4">
              <img
                src="/assets/img/data-security.png"
                alt="Data Security"
                className="mt-8 "
              />
            </div>
          </div>
          <div className="mt-8 justify-center text-center">
            <h1 className="text-xl font-semibold">AgensSQL DB Engine</h1>
            <h2 className="mt-4 text-lg font-semibold">
              Enhanced Data Security
            </h2>
            <p className="mt-4">
              AgensSQL is a PostgreSQL-based DBMS that guarantees optimal
              security and stability.
            </p>
          </div>
          <div className=" flex mt-8">
            <img src="/assets/img/passwordProfile.jpg" alt="Password Profile" />
            <img src="/assets/img/DataRedaction.jpg" alt="Data Redaction" />
            <img src="/assets/img/Auditing.jpg" alt="Auditing" />
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-xl font-semibold">Agens Enterprise Package</h1>
            <p className="mt-4">
              Agens Enterprise Package comes with a high availability management
              server that supports backup and data monitoring dashboard <br />
              that helps enterprise customers manage their data efficiently.
            </p>
            {/* <div className="mt-4">
              <h1 className="text-lg font-semibold">Agens HA Manager</h1>
              <p className="mt-2">
                HA Clustering – Failover/Failback, Load-balancing
              </p>
              <img
                src="/assets/img/database.png"
                alt="Database"
                className="mt-4"
              />
            </div>
            <div className="mt-8">
              <h1 className="text-lg font-semibold">
                Agens Enterprise Manager
              </h1>
              <div className="mt-4 rounded-lg bg-white p-6 shadow-md dark:bg-neutral-700">
                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Card title
                </h5>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div> */}

            <div className="flex items-center justify-center flex-col mt-10">
              <h1 className="text-2xl font-semibold">
                Agens Enterprise Package
              </h1>
              <p className="text-gray-600 text-lg mt-4">
                Agens Enterprise Package comes with a high availability
                management server that <br /> supports backup and data
                monitoring dashboard that helps enterprise customers manage
                their data efficiently.
              </p>

              <div className="flex gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  <h1 className="text-lg font-semibold">Agens HA Manager</h1>
                  <p>HA Clustering – Failover/Failback, Load-balancing</p>
                  <img
                    src="/assets/img/database.png"
                    alt="Agens HA Manager"
                    className="mt-4"
                  />
                  <p className="text-lg font-semibold">Replication</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-lg font-semibold">
                    Agens Enterprise Manager
                  </h1>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                        {cardsData.map((card, index) => (
                      <Card key={index} {...card} />
                    ))}
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
