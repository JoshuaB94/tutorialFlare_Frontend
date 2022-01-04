import './VideoCreatorProfile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { TiSocialYoutube, TiSocialTwitter, TiMail } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const VideoCreatorProfile = () => {
    const [profile, getProfile] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3200/api/video-creator/profile`)
        .then(res => {
            console.log(res)
            getProfile(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return ( 
        <div>
            <div className="vc-profilepage">
                <div className="vc-profilebar">
                    {profile.map((vcprofile) => (
                       <div className="vc-profilecontainer" key={vcprofile._id}>
                            <Avatar src="/broken-image.jpg" sx={{width: 180, height: 180}} className="vc-avatar" />
                            <div className="vc-basicinfo">
                                <h3>{vcprofile.Name}</h3>
                                <p>{vcprofile.Location}</p>
                            </div>
                            <div className="vc-skills">
                                <div>{vcprofile.Skills.skillOne}</div>
                                <div>{vcprofile.Skills.skillTwo}</div>
                                <div>{vcprofile.Skills.skillThree}</div>
                            </div>
                            <div className="vc-socials">
                                <a href={vcprofile.SocialLinks.Youtube} target="_blank" rel="noopener noreferrer"><TiSocialYoutube /></a>
                                <a href={vcprofile.SocialLinks.Twitter} target="_blank" rel="noopener noreferrer"><TiSocialTwitter /></a>
                                <a href={`mailto:${vcprofile.SocialLinks.emailAddress}`}><TiMail /></a>
                            </div>
                            <Link to="/hiremeform" className="hire-me">
                                <button className="hire-button">Hire Me</button>
                            </Link> 
                        </div>  
                    ))}
                </div>

                <div className="vc-showcase">
                    <h3>My Latest Video Tutorials</h3>
                    <div className="vc-videos">
                        <p>This is where the videos will live!</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideoCreatorProfile;