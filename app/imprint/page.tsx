const Legal = () => {
    return(
        <div className="min-h-screen py-24 flex flex-col gap-16">
            <div className=" flex flex-col items-start gap-6">
                <h1 className="text-5xl font-bold">Imprint</h1>
                <p>Last edited: May 25th, 2024 at 2:00PM</p>
                <p>This Imprint section provides important legal information about this personal portfolio website and
                    its content. As a visitor, please review the following details carefully.</p>
            </div>
            <div id="copyright-notice" className=" flex flex-col items-start gap-6">
                <h1 className="text-3xl font-bold">Copyright Notice</h1>
                <p>&copy; 2023 Techit Thawiang. All rights reserved.</p>
                <p>The content on this website, including but not limited to text, images, graphics, videos, audio
                    files,
                    and software code, is the property of Techit Thawiang and is protected by international copyright
                    laws.</p>
                <p>You may access, view, and print the materials on this website (techit.win) for personal,
                    non-commercial
                    use only. No part of these materials may be reproduced, distributed, modified, or transmitted in any
                    form or by any means, including electronic or mechanical means, without the prior written permission
                    of
                    Techit Thawiang.</p>
                <p>Unauthorized use of the materials on this website may violate copyright laws, trademark laws, privacy
                    laws, or other regulations and statutes. Techit Thawiang reserves all rights not expressly granted
                    in
                    this Copyright Notice.</p>
                <p>If you have any questions or concerns regarding the use of materials on this website, please contact
                    me
                    at <a href="mailto:techit@dailitation.xyz">techit@dailitation.xyz</a>.</p>
            </div>
            <div id="privacy-policy" className=" flex flex-col items-start gap-6">
                <h1 className="text-3xl font-bold">Privacy Policy</h1>
                <p>This website does not collect, store, or process any personal information from
                    visitors. We do not use cookies or any other tracking technologies.</p>
            </div>
            <div id="trademarks" className=" flex flex-col items-start gap-6">
                <h1 className="text-3xl font-bold">Trademarks</h1>
                <p>This website may contain trademarks owned by third parties. The use of these trademarks does not
                    imply any affiliation with or endorsement by the respective trademark owners.</p>
                <ul>
                    <li>techit.win are trademark of Techit Thawiang</li>
                </ul>
                <p>All other trademarks appearing on this website are the property of their respective owners.</p>

            </div>
        </div>
    );
};

export default Legal;