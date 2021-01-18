import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
       <FooterContainer className="main-footer">
        <div className="footer-middle ">
       <div className="container">
        
        {/* Footer-copyright */}
            <div className="footer-bottom" >
            <p className="text-xs-center">
            &copy;{2011} Bharat Industries-All Rights
            </p>
            </div>     
        </div>  
        </div> 
       </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainLightGray);
    padding-top:1rem;  
}

.footer-bottom{
    padding-bottom:1rem;
}
`;