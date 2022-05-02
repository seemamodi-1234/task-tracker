import Button from './button'

const Header = ({onAddingTask}) => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button onClick={onAddingTask}/>
    </header>
  )
}

export default Header