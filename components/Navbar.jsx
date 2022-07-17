import React from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"

import styles from "../styles/NavbarLayout.module.scss"

export default function NavbarLayout({ expand }) {
    const navbarText = [
        {
            title: "Qui sommes-nous ?",
            content: [
                { title: "Histoire", link: "/histoire" },
                { title: "Organisation", link: "/organisation" },
                { title: "Transparence", link: "/transparence" },
                { title: "Partenaires", link: "/partenaires" },
            ],
        },
        {
            title: "Que faisons-nous ?",
            content: [
                { title: "Education", link: "/education" },
                { title: "Santé", link: "/sante" },
                { title: "Environnement", link: "/environnement" },
            ],
        },
        {
            title: "Nous soutenir",
            content: [
                { title: "Histoire", link: "/histoire" },
                { title: "Organisation", link: "/organisation" },
                { title: "Transparence", link: "/transparence" },
                { title: "Partenaires", link: "/partenaires" },
            ],
        },
        {
            title: "Qui sommes-nous ?",
            content: [
                { title: "Donner ou parrainer", link: "/don" },
                {
                    title: "Transmettre un leg ou une assurance vie",
                    link: "/leg",
                },
                { title: "Soutenir autrement", link: "/autre-soutien" },
                { title: "Tourisme solidaire", link: "/tourisme solidaire" },
            ],
        },
        {
            title: "Prendre un engagement",
            content: [
                { title: "Depuis la France", link: "/engagement-france" },
                { title: "A Madagascar", link: "/engagement-madagascar" },
                { title: "Offre de mission/emploi", link: "/emploi" },
            ],
        },
    ]
    return (
        <>
            <Navbar key={expand} bg='light' expand={expand} className={styles.navbar + ' mb-3'}>
                <Container fluid>
                    <Navbar.Brand href='#'>Fitiavana</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                    />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement='end'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                id={`offcanvasNavbarLabel-expand-${expand}`}
                            >
                                Navigation
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-end flex-grow-1 pe-3'>
                                {navbarText.map(subject => (
                                    <NavDropdown
                                        title={subject.title}
                                        key={subject.title}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                      {subject.content.map(topic => 
                                        <NavDropdown.Item href='#action3' key={topic.title}>
                                            {topic.title}
                                        </NavDropdown.Item>
                                      )}
                                    </NavDropdown>
                                ))}
                            </Nav>
                            {/* <Form className='d-flex'>
                                <Form.Control
                                    type='search'
                                    placeholder='Search'
                                    className='me-2'
                                    aria-label='Search'
                                />
                                <Button variant='outline-success'>
                                    Search
                                </Button>
                            </Form> */}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}
