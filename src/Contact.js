import styled from "styled-components";
import React from "react";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact us </h2>
        <div className="container">
          <div className="grid grid-two-column">
            <div className="form-data">
              <div className="contact-form">
                <form action="https://formspree.io/f/xdojzvyq" method="POST" className="contact-inputs">
                  <input
                    type="text"
                    placeholder="Username"
                    name="Username"
                    id=""
                    required
                    autoComplete="off"
                  />

                  <input
                    type="email"
                    name="Email"
                    id=""
                    placeholder="E-mail"
                    required
                    autoComplete="off"
                  />
                  <textarea
                    name="Message"
                    placeholder="Enter you Message"
                    id=""
                    cols="30"
                    rows="10"
                    required
                    autoComplete="off"
                  ></textarea>
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
            <div className="map-data">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.013541343407!2d74.01944261505145!3d30.407357681751673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917910001c74a9d%3A0x9e26a2dae2cde9e5!2sHimanshu%20Manchanda!5e0!3m2!1sen!2sin!4v1664878303747!5m2!1sen!2sin"
                width="100%"
                height="600px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .grid{
    align-items:center;
  }
  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;
      align-items:center;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
