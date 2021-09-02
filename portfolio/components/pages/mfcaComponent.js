import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChartBar,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

async function getUserEnterprises(users) {
  const user = await axios
    .get("/api/proxy/user-enterprise?$limit=3", {
      params: { idUser: users.custom.id },
    })
    .catch((e) => e);
  let datas = [];
  if (user.data) {
    for (let i = 0; i < user.data.data.length; ++i) {
      let enterprise = await axios
        .get("/api/proxy/enterprise/" + user.data.data[i].idEnterprise)
        .catch((e) => e);
      datas.push(enterprise.data);
    }
  } else {
    window.location.assign("/logout");
    return;
  }

  return datas;
}

async function getAnalysisUser() {
  try {
    const analysis = await axios.get("/api/proxy/analysis-user?$limit=3");
    return analysis;
  } catch (error) {
    return error.response;
  }
}

export default function mfcaComponent({ user }) {
  const [enterprises, setEnterprises] = useState([]);
  const [analysis, setAnalysis] = useState([]);

  if (user) {
    useEffect(() => {
      getUserEnterprises(user).then((res) => {
        setEnterprises(res);
      });
    }, []);
  }

  useEffect(() => {
    getAnalysisUser().then((res) => {
      setAnalysis(res);
    });
  }, []);

  // eslint-disable-next-line
  const newSimplify = async () => {
    const router = useRouter();
    await axios
      .post(`/api/proxy/simplified`, {
        idEnterprise: "allo",
      })
      .then((res) => {
        console.log(res.data.id);
        router.push("/nouveauSimplifie/" + res.data.id);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          return {
            redirect: {
              source: "/",
              permanent: false,
              destination: "/login",
            },
          };
        }
      });
  };

  return (
    <>
      <section className="hero is-primary welcome is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-light">Bienvenue</h1>
            <h2 className="subtitle has-text-light">
              Veuillez choisir entre une analyse existante ou créer-en une
              nouvelle
            </h2>
          </div>
        </div>
      </section>
      <div className="columns mt-6">
        <div className="column is-6">
          <div className="card ">
            <header className="card-header">
              <p className="card-header-title">Projets</p>
              <a
                href="#"
                className="card-header-icon"
                aria-label="more options"
              >
                <span className="icon fa-layers fa-fw">
                  <FontAwesomeIcon
                    className="icon"
                    color="white"
                    icon={faChartBar}
                  />
                </span>
              </a>
            </header>
            <div className="hero">
              <div className="card-table">
                <div className="content">
                  <table className="table is-fullwidth is-striped">
                    <tbody>
                      {analysis.length != 0 && analysis.data ? (
                        analysis.data.map((analysis) => {
                          return (
                            <tr key={analysis.id}>
                              <td width="5%">
                                <i className="fa fa-bell-o"></i>
                              </td>
                              <td>{analysis.name}</td>
                              {analysis.isCompleted == 0 ? (
                                <td className="level-right">
                                  <Link
                                    className="button is-small is-primary has-text-light"
                                    href={`/${
                                      analysis.type == "preliminaire"
                                        ? "nouveauPreliminaire"
                                        : "nouveauSimplifie"
                                    }/${analysis.id}`}
                                  >
                                    Compléter
                                  </Link>
                                </td>
                              ) : (
                                <td className="level-right">
                                  <Link
                                    className="button is-small is-primary has-text-light"
                                    href={`/${analysis.type}/${analysis.id}`}
                                  >
                                    Voir
                                  </Link>
                                </td>
                              )}
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>Aucun projet créer.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <Link href="/analyse">
                <a className="card-footer-item">Voir plus</a>
              </Link>
            </footer>
          </div>
        </div>
        <div className="column is-6">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">Créer un nouveau projet</p>
              <a
                href="#"
                className="card-header-icon"
                aria-label="more options"
              >
                <span className="icon">
                  <FontAwesomeIcon
                    className="icon"
                    color="white"
                    icon={faPlus}
                  />
                </span>
              </a>
            </header>
            <div className="hero">
              <div className="columns is-vcentered m-4">
                <div className="column is-half has-text-centered">
                  <Link href="/nouveauPreliminaire">
                    <a className="button is-big is-primary has-text-light">
                      Préliminaire
                    </a>
                  </Link>
                </div>
                <div className="column is-half has-text-centered">
                  <Link href="/nouveauSimplifie">
                    <a
                      //onClick={newSimplify}
                      className="button is-big is-primary has-text-light"
                    >
                      Simplifié
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user.custom.type != "enterprise" ? (
        <div className="columns">
          <div className="column is-half">
            <div className="card ">
              <header className="card-header">
                {enterprises.length > 1 ? (
                  <p className="card-header-title">Vos entreprises</p>
                ) : (
                  <p className="card-header-title">Votre entreprise</p>
                )}

                <a
                  href="#"
                  className="card-header-icon"
                  aria-label="more options"
                >
                  <span className="icon fa-layers fa-fw">
                    <FontAwesomeIcon
                      className="icon"
                      color="white"
                      icon={faIndustry}
                    />
                  </span>
                </a>
              </header>
              <div className="hero">
                <div className="card-table">
                  <div className="content">
                    <table className="table is-fullwidth is-striped">
                      <tbody>
                        {enterprises.length > 0 ? (
                          enterprises.map((ent) => {
                            return (
                              <tr key={ent.id}>
                                <td width="5%">
                                  <i className="fa fa-bell-o"></i>
                                </td>
                                <td>{ent.name}</td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td>Aucune entreprise assigné.</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <Link href={`utilisateurs/${user.custom.id}`}>
                  <a className="card-footer-item">Voir plus</a>
                </Link>
              </footer>
            </div>
          </div>
          <div className="column is-half"></div>
        </div>
      ) : null}
    </>
  );
}
