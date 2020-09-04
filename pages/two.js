export async function getServerSideProps(context) {
  return {
    props: {
      randomServerProp: Math.random()
    },
  }
}

const Two = (props) => {
  console.log(props)
  return [
    <div>Page Two</div>,
    <div>{JSON.stringify(props, null, 2)}</div>
  ]
}

export default Two