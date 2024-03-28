import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`

    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY5NiIgaGVpZ2h0PSI3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNOTI3Ljk1MiA1OTIuNjY1Yy0zNS42NTYuNzUtNjcuMzkgMi4wMDQtNzcuNzU1IDMuODItMjcuMjkyIDQuNzg0LTYzLjkwMiAxNy42NjctODQuMTE2IDI3LjQwMi0yMy45NzggMTEuNTQ4LTUwLjkxMiAyNy4yMjYtNzQuMTIgNDIuODI5LTM4LjcyIDI2LjAzMi03NC4xNjUgNTQuMTA1LTExMC42OCA4MS40OTUtMTguNzY3IDE0LjA3OC0zNy44ODcgMzEuNjEtNTcuODMyIDQ0Ljk3Mmg0NzEuNzE2Yy0yMC4xMTQtNTkuNzgyLTQ3LjU5Ny0xNDIuMzUxLTY3LjIxMy0yMDAuNTE4IiBmaWxsPSIjRDZDRjhEIi8+PHBhdGggZD0iTTE0MTEuMzk0IDQwOC4wMDZjLTkyLjM0LTExNS43NzYtMTYzLjE3Mi0yMTYuMDQ1LTMwOS44OTItMzQ0LjA3MUMxMDY0LjUgMzEuNjQ3IDEwMDUuMjEyLTQuOCA5MDMuMjQ0IDEuMTA4Yy03Mi4zMDYgNC4xOS0xNDYuMDUgODcuMDY1LTE0Ni4wNSA4Ny4wNjUtMzYuNDI1IDM4Ljg4Ny03Ny44OCA4NC41OS0xMTAuOTE0IDEyMi42NjctNTQuNTYxIDYyLjg4OC0yODguMzY2IDI3OS4zOTUtMzg4LjQxIDM2OC4yNTRDMTk1LjExNyA2MzQuODMgNzYuNjMgNzM1LjM5NC0uNzQzIDc5My4xODNIMzAyLjI0YzEwNC4yODQtNzYuNjc4IDI3OC4yOC0xMzAuMTAxIDM3Ni45ODgtMjAxLjk3IDEwOC42OTItNzkuMTM2IDE0MC4wOS0xMzcuODM4IDE3My42MDYtMTM3LjM5IDI4LjMwOC4zNzggMzYuNDM2IDMzLjUxIDUxLjM2MyA3MC4xMDggMi41MTggNi4xNzQgMTEuNjM0IDMyLjc5NiAyMy43NTQgNjguNzM0IDE5LjYxNiA1OC4xNjcgNDcuMDk5IDE0MC43MzYgNjcuMjEzIDIwMC41MThoNzAxLjA2NmMtODAuMDktMTA4Ljc2NS0yNjQuMzc3LTM1OS41MjQtMjg0LjgzNy0zODUuMTc3IiBmaWxsPSIjRkY4MDhCIi8+PC9nPjwvc3ZnPg==");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ff6668;
    margin-bottom: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    
    >hr{
        margin-bottom: 40px;
    }

    div{
        padding-bottom: 10px;
        >p{
            font-size: 12px;
            color: #48444487;
            letter-spacing: 2px;
            padding-left: 20px;
            padding-top: 10px;
        }
    }

    a>i{
        color: white;
        padding-left: 20px;
    }

.footer{
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    div{
        margin: 10px;
        >a{
            color: white;
            text-decoration: none;
            font-size: 10px;
            letter-spacing: 1px;
        }
    }
}
.column{
    display: flex;
    flex-direction: column;
    gap: 10px;
    >a{
        text-decoration: none;
        color: white;
        font-size: 10px;
        letter-spacing: 1px;
    }
}

`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <div className="footer">
            <div>
                <h4>Forum</h4>
                <Link to='/forum/questions'>Join the discussion here</Link>
            </div>
            <div>
                <h4>Connect</h4>
                <div className="column">
                <Link>Get in touch here</Link>
                </div>
            </div>
            <div>
                <h4>Legal</h4>
                <div className="column">
                <Link>GDPR Policy</Link>
                <Link>Terms and Conditions</Link>
                <Link>Cookie Preferences</Link>
                </div>
            </div>
            </div>
            <hr />
            <div>
                  <Link><i class="bi bi-facebook"></i></Link>
                  <Link><i class="bi bi-twitter"></i></Link>
                  <Link><i class="bi bi-instagram"></i></Link>
                  <Link><i class="bi bi-tiktok"></i></Link>
                  <p><i class="bi bi-c-circle"></i>2024 Copyrights owned by UAB VEBSAITUKURIMAS</p>
              </div>
        </StyledFooter>
     );
}
 
export default Footer;