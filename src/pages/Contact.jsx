import "../css/Contact.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

import { Carousel } from "../components";

export function Contact() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const [activeIndex, setActiveIndex] = useState(1);
    const handleToggle = (index) => setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

    return (
        <>
            <Carousel />
            <div className="content-container">
                <h1>Lieu de livraison possible</h1>
                <hr />
                <div className="content-map">
                    <div>
                        <iframe
                            src="https://urlr.me/b8VLW"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div>
                        <h3>Projet sur mesure</h3>
                        <p>
                            Désormais, vous avez la possibilité de passer commande pour des œuvres existantes, ou encore
                            de collaborer directement avec moi pour créer une pièce personnalisée, taillée sur mesure
                            selon vos désirs. Pour initier cette démarche, il vous suffit de m&apos;envoyer un message
                            en complétant les rubriques ci-dessous, ou à l&apos;adresse suivante :
                        </p>
                        <a className="content-mail" href="mailto:folding.art.contact@gmail.com">
                            folding.art.contact@gmail.com
                        </a>
                        <hr />
                        <ul>
                            <li>
                                <a href="https://urlr.me/D3Ky1" rel="noreferrer" target="_blank">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="https://urlr.me/67xBS" rel="noreferrer" target="_blank">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://urlr.me/7jS2k" rel="noreferrer" target="_blank">
                                    <FaPinterest />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1>Envoyez-moi un message</h1>
                <hr />
                <div className="content-form">
                    <div className="form-input">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    placeholder="Nom et Prénom"
                                    required={true}
                                    autoComplete="on"
                                    {...register("name")}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Adresse E-mail"
                                    required={true}
                                    autoComplete="on"
                                    {...register("mail")}
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Contenu du message"
                                    required={true}
                                    autoComplete="off"
                                    {...register("content")}
                                />
                            </div>
                            <input className="form-submit" type="submit" />
                        </form>
                    </div>
                    <div className="form-accordion">
                        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
                            <div className="accordion-header" onClick={() => handleToggle(1)}>
                                <h3>Infos</h3>
                            </div>
                            <div className="accordion-content">
                                <p>
                                    Veuillez noter que les frais de livraison sont à la charge de l&apos;acheteur.
                                    Toutefois, je suis heureux de vous annoncer que la livraison vous est offerte pour
                                    toute commande dépassant la valeur de 50 €.
                                </p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
                            <div className="accordion-header" onClick={() => handleToggle(2)}>
                                <h3>Newsletter</h3>
                            </div>
                            <div className="accordion-content">
                                <p>
                                    En souscrivant à ma newsletter, vous serez destinataire d&apos;un e-mail mensuel
                                    présentant les derniers produits, des offres exclusives et bien d&apos;autres
                                    surprises. N&apos;hésitez pas à vous enregistrer en cliquant sur le bouton dédié.
                                </p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}>
                            <div className="accordion-header" onClick={() => handleToggle(3)}>
                                <h3>Collaboration</h3>
                            </div>
                            <div className="accordion-content">
                                <p>
                                    Si vous êtes un artiste : dessinateur, fleuriste, musicien, ou autre, et que vous
                                    êtes ouvert à un travail partagé, je vous encourage vivement à m&apos;envoyer un
                                    e-mail. Cela nous permettra d&apos;entamer ensemble une réflexion sur les
                                    possibilités de collaboration.
                                </p>
                            </div>
                        </div>
                        <div className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}>
                            <div className="accordion-header" onClick={() => handleToggle(4)}>
                                <h3>Copyright</h3>
                            </div>
                            <div className="accordion-content">
                                <p>
                                    Veuillez noter qu&apos;il est strictement interdit de revendre mes articles à des
                                    fins lucratives, sous peine de poursuites légales. Dans le cas où vous envisageriez
                                    de reproduire un de nos articles, cela est envisageable uniquement avec mon
                                    autorisation préalable. Pour obtenir cette autorisation, veuillez me contacter
                                    exclusivement par e-mail à l&apos;adresse indiquée ci-dessus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
