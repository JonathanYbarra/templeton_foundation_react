import moment from 'moment';
import '../../../styles/_components/footer.css';

import { Facebook, Twitter, Google, Youtube, Linkedin } from 'react-bootstrap-icons';
export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>Templeton Foundation</h3>
                <p>
                    Philosophy of Science Group, Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires - Ciudad Universitaria, Pabellón II / Buenos Aires, Argentina
                </p>

                <ul className="socials">
                    <li>
                        <a href="/#">
                            <Facebook />
                        </a>
                    </li>

                    <li>
                        <a href="/#">
                            <Twitter />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <Google />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <Youtube />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <Linkedin />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy; {moment().year()}  Templeton Foundation. designed by <span>Jonathan Ybarra</span></p>
            </div>
        </footer>
    )
}
