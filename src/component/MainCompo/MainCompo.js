import React from "react";
import "./MainCompo.css";
// import billboard from "../../image/billboard.jpeg";
function MainCompo() {
  return (
    <div className="Main-page ">
      <div className="main-page1">
        <div className="div-first d-flex justify-content-between border bg-white">
          <div className="m-3 ms-5">
            <i className="fa fa-angellist fa-1x m-1"></i>
            <span className="text-primary">AdMAVIN</span>
          </div>
          <div className="d-flex m-3 mx-3">
            <div className="mx-3">
              <span>Help</span>
            </div>
            <div className="mx-3">
              <i className="fa fa-gear"></i>
            </div>
            <div className="mx-3">
              <i className="fa fa-user"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex m-0 row-edit">
        <div className="list-group">
          <ul type="none" className="list-menu mt-4 text p-0 m-2">
            <li className="p-2">Overview(12)</li>
            <li className="p-2">Banglore(3)</li>
            <li className="p-2">Delhi(6)</li>
            <li className="p-2">Mumbai(3)</li>
          </ul>
        </div>
        <div className="two-div">
          <div className="text-title col-edit d-flex d-flex justify-content-between p-2">
            <div className="box1">
              <h4 className="my-2 mx-3">Colorplus metro lunch.xls</h4>
            </div>
            <div className="edit-button">
              <span className="m-4 text-primary text1">
                Add site to compaign
                <i className="fa fa-solid fa-angle-down m-2"></i>
              </span>
              <button
                type="button"
                className="btn btn-primary m-2 share-button"
              >
                <span className="m-3">Share</span>
                <i className="fa fa-share-alt"></i>
              </button>
            </div>
          </div>
          <div className="mt-3 mx-3">
            <span className="ms-4 head-text">Banglore</span>
            <div className="d-flex justify-content-between mx-3">
              <span className="ms-2 mt-3">City Compaign performance</span>
              <span className="text-primary mt-3 download-text">
                Download city report
              </span>
            </div>
            <div className="d-flex mx-4">
              <div className="card card-edit mt-4 col-4">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted sites-text">
                    No.of sites
                  </h6>
                  <h6 className="card-subtitle mb-2 no-text">3</h6>
                </div>
              </div>
              <div className="card card-edit mt-4 col-4 mx-1">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted impression-text">
                    impressions
                  </h6>
                  <h6 className="card-subtitle mb-2 text-no-mutiple">
                    120,23,232
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted impression-text">
                    Est.covid impressions:1,21,212
                  </h6>
                </div>
              </div>
              <div className="card card-edit mt-4 col-4">
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted rating-text">
                    Avg LTS rating
                  </h6>
                  <h6 className="card-subtitle mb-2 text-no">4.5/5</h6>
                  <h6 className="card-subtitle mb-2 text-muted impression-text">
                    across all 3 sites
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-5 mx-3">
              <span className="px-1">Map view with points performance</span>
              <div className=" map-edit d-flex mt-3 border">
                <div className="d-flex">
                  <div className="mx-2 my-1">
                    <span className="card-subtitle sites-text target-text">
                      Target group
                    </span>
                    <span className="card-subtitle text-muted small-text d-grid">
                      All
                    </span>
                  </div>
                  <div className="mx-4 my-1">
                    <span className="card-subtitle sites-text point-text">
                      Points of interest
                    </span>
                    <span className="text-sites ms-2">
                      within 5 km of sites
                    </span>
                    <span className="text-sites d-grid">
                      Corporate Hubs:6 | 5 star hotels:0| Metro : 3 | junction :
                      7
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-end">
                  <div className="two-button my-3">
                    <button className="btn border edit-radious text-primary edit-btn1 mx-1">
                      Download image
                    </button>
                    <button className="btn border edit-radious text-primary edit-btn2 mx-1">
                      Edit map view
                    </button>
                  </div>
                </div>
              </div>
              <div className="box-map border bg-info"></div>
              <div className="d-flex justify-content-between last-div mt-5">
                <div>
                  <span>Site Details</span>
                </div>
                <div className="mb-2">
                  <button className="btn edit-radious border btn-sm px-2">
                    <span className="filter-edit">Filter</span>

                    <i className="fa fa-sliders ps-4"></i>
                  </button>
                </div>
              </div>
              <div className="div-table">
                <table className="table">
                  <thead className="border bg-colour table-head-text">
                    <tr>
                      <th scope="col" className="table-head-text">
                        <p className="mb-0 ">Site Name</p>
                        <p className="small-text">
                          Media type,dimensions,Lighting,Region
                        </p>
                      </th>
                      <th scope="col" className="table-head-text1">
                        <p className="mb-0">Start and end date</p>
                        <p className="small-text">Duration</p>
                      </th>
                      <th scope="col" className="table-head-text2">
                        <p className="mb-0">Impressions</p>
                        <p className="small-text">Monthly avg</p>
                      </th>
                      <th scope="col" className="table-head-text3">
                        <p className="mb-0">Impressions during covid</p>
                        <p className="small-text">
                          Monthly avg since Apr 21,2021
                        </p>
                      </th>
                      <th scope="col" className="table-head-text4">
                        LTS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border">
                    <tr>
                      <td>
                        <div className="d-flex">
                          <i className="fa fa-image fa-3x"></i>
                          {/* <img src="" alt="image show"></img> */}
                          <div className="mx-2 my-1">
                            <p className="table-text mb-0 text-primary">
                              Whitefield Junction
                            </p>
                            <p className="foot-text">
                              foot Over Bridge | 30.0ft X 7.0Ft | Front Lit
                              Whitefield
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="date-edit">
                          Nov 21-Dec 5,2021
                          <i className="fa fa-"></i>
                        </p>
                      </td>
                      <td className="date-edit">7,71,870</td>
                      <td className="date-edit">
                        <div className="d-flex justify-content-center">
                          <div className="m-1">
                            <span>666,741</span>
                          </div>
                          <div>
                            <h6 className="m-1">
                              <span className="badge badge-secondary bg-danger badge-edit px-1">
                                <span className="m-1">12%</span>

                                <i className="fa fa-arrow-up"></i>
                              </span>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td className="date-edit">
                        <div className="d-flex justify-content-between">
                          <div>
                            <span>3.7/5</span>
                          </div>
                          <div className="px-3">
                            <i className="fa fa-ellipsis-v"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          {/* <img src={""} alt="image show"></img> */}
                          <i className="fa fa-image fa-3x"></i>
                          <div className="mx-2 my-1">
                            <p className="table-text mb-0 text-primary">
                              indira nagar flyover 3
                            </p>
                            <p className="foot-text">
                              foot Over Bridge | 30.0ft X 7.0Ft | Front Lit
                              Whitefield
                            </p>
                          </div>
                        </div>
                      </td>
                      <td colSpan={4}>
                        <p className="date-edit my-3">
                          <i className="fa fa-info-circle m-1"></i>
                          site location not found |{" "}
                          <span className="text-primary ">
                            Estimate with nearest latitude longitude
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex">
                          <i className="fa fa-image fa-3x"></i>
                          {/* <img src="" alt="image show"></img> */}
                          <div className="mx-2 my-1">
                            <p className="table-text mb-0 text-primary">
                              Cox Town Junction
                            </p>
                            <p className="foot-text">
                              foot Over Bridge | 30.0ft X 7.0Ft | Front Lit Cox
                              Town
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <p className="date-edit">Nov 21-Dec 5,2021</p>
                        <i className="fa fa-angel-down"></i>
                      </td>
                      <td className="date-edit">7,71,870</td>
                      <td className="date-edit">
                        <div className="d-flex justify-content-center">
                          <div className="m-1">
                            <span>666,741</span>
                          </div>
                          <div>
                            <h6 className="m-1">
                              <span className="badge badge-secondary bg-danger px-1 badge-edit">
                                <span className="m-1">12%</span>

                                <i className="fa fa-arrow-up"></i>
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div></div>
                      </td>
                      <td className="date-edit">
                        <div className="d-flex justify-content-between">
                          <div>
                            <span>3.7/5</span>
                          </div>
                          <div>
                            <div className="dropleft ">
                              <button
                                className="btn fa fa-ellipsis-v bg-colour"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              ></button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a className="dropdown-item" href="#">
                                  Download site report
                                </a>
                                <a className="dropdown-item" href="#">
                                  Share link
                                </a>
                                <a className="dropdown-item" href="#">
                                  remove Site
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCompo;
