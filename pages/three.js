export async function getStaticProps(context) {
  console.log('getStaticProps', {context});

  return {
    props: {
      greeting: 'hello world',
      randomStaticProp: Math.random()
    },
  }
}

const Three = (props) => {
  console.log(props)
  return [
    <div>Page Three</div>,
    <div>{ JSON.stringify(props, null, 2) }</div>
  ]
}

export default Three