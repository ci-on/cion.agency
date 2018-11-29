export default function({ route, redirect }) {
  console.log(route)
  if (route.fullPath === '/') {
    return redirect('/landing')
  }
}
