import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Slide from '../components/slide'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>

      <h1>Hello World</h1>
      <h2>This is Gatsby.</h2>
      <h3>And I'm very happy today.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nibh praesent
        tristique magna sit amet purus gravida quis blandit.
      </p>
      <p>
        Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Eget
        velit aliquet sagittis id consectetur purus ut faucibus. Nunc aliquet
        bibendum enim facilisis gravida neque. Lacinia quis vel eros donec ac
        odio tempor orci dapibus.
      </p>
      <p>
        Tortor at auctor urna nunc id cursus metus aliquam eleifend. Faucibus et
        molestie ac feugiat sed lectus. Cursus mattis molestie a iaculis at erat
        pellentesque. Nisl tincidunt eget nullam non nisi est sit amet. Dui
        vivamus arcu felis bibendum ut tristique et egestas quis.
      </p>

      <table class="data">
        <tr>
          <th>Entry Header 1</th>
          <th>Entry Header 2</th>
          <th>Entry Header 3</th>
          <th>Entry Header 4</th>
        </tr>
        <tr>
          <td>Entry First Line 1</td>
          <td>Entry First Line 2</td>
          <td>Entry First Line 3</td>
          <td>Entry First Line 4</td>
        </tr>
        <tr>
          <td>Entry Line 1</td>
          <td>Entry Line 2</td>
          <td>Entry Line 3</td>
          <td>Entry Line 4</td>
        </tr>
        <tr>
          <td>Entry Last Line 1</td>
          <td>Entry Last Line 2</td>
          <td>Entry Last Line 3</td>
          <td>Entry Last Line 4</td>
        </tr>
      </table>

      <p>
        Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
        Proin fermentum leo vel orci porta non pulvinar neque. Eu scelerisque
        felis imperdiet proin fermentum leo vel orci. Adipiscing at in tellus
        integer feugiat scelerisque varius morbi.
      </p>
    </Layout>
    <Slide />
  </div>
)

export default IndexPage
