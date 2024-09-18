import React, { useEffect, useRef, useState } from 'react'
import s from './Main.module.scss'
import SC from '../common/styles/Container.module.scss'
// @ts-ignore (no type declarations for vantajs)
import VANTA from 'vanta/dist/vanta.net.min'
import myPhoto from '../common/img/myPhoto.jpg'

const Main = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const vantaRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                VANTA({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xff0505,
                    backgroundColor: 0xffffff,
                    showDots: false,
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <div className={s.mainDiv} ref={vantaRef} id="main">
            <div className={SC.container}>
                <div className={s.description}>
                    <div className={s.myPhoto}>
                        <img src={myPhoto} alt="" />
                    </div>
                    <div className={s.descriptionText}>
                        <p>Hello!</p>
                        <p>My name is Ekaterina Kopylova.</p>
                        <p>I am front-end developer, based in Dubai, UAE.</p>
                        <p>Scroll down to check on my skills and projects.</p>
                        <button className={s.CVBtn}>
                            <a
                                href="https://drive.google.com/file/d/1a3QuZfwyB_7qbg1H8VSStw0TWyQwD9Yb/view?usp=drivesdk"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
