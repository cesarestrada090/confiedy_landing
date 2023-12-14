import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/meanmenu.min.css'
import '../styles/flaticon.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-tabs/style/react-tabs.css'
import 'react-image-lightbox/style.css'
import 'swiper/css/bundle'
import '../styles/style.css'
import '../styles/responsive.css'

import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider } from 'baseui'

import { styletron } from '../styletron'
import Layout from '../components/_App/Layout'

import UniversityContextProvider from '../contexts/universityContext'
import CoursesContextProvider from '../contexts/coursesContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <UniversityContextProvider>
          <CoursesContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CoursesContextProvider>
        </UniversityContextProvider>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default MyApp
