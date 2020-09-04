export async function getStaticProps(context) {
  console.log('getStaticProps', {context});

  return {
    props: { // will be passed to the page component as props
      greeting: 'hello world'
    },
  }
}

const Three = ({ greeting }) => {
  return [
    <div>Page Three</div>,
    <div>{ greeting }</div>
  ]
}

export default Three