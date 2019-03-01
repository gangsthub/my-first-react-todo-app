#  my-first-react-todo-app
Simple react todo app with hooks! ⚓

## Decisions:

- [x] I opted to use some hooks in the
[parent component](https://github.com/gangsthub/my-first-react-todo-app/blob/master/src/scripts/components/App.jsx)
as an alternative to Redux or similar solutions. Altough, I'm using `useReducer` hook (new React API) and a
[`reducer`](https://github.com/gangsthub/my-first-react-todo-app/blob/237db4131862a2d934791131f5c32a65b27c2eb2/src/scripts/components/toDos/todos.reducer.js)
and a [`state`](https://github.com/gangsthub/my-first-react-todo-app/blob/237db4131862a2d934791131f5c32a65b27c2eb2/src/scripts/components/toDos/todos.state.js).

- [x] I have practiced hooks in functional statefull components as well.

- [x] I have tried to avoid using arrow functions and functions (+ `bind(this)`) inside the `render` to improve performance.

- [x] I havent's used any UI framework or React framework. But I have added some CSS code of my own and a couple of libraries...:
    - `dayjs` to format dates easily (2KB library)
    - `typography` to deal with vertical rythm and default text styles.
    - `prop-types` (React Prop Types) to type inherited props
    
- [x] I am using Parcel instead of Webpack. Not as powerfull but 100 times easier to set up, given I didn't have too much time.

- [x] I have added my own Eslint rules.

## TODO in my TODO app:

- [ ] testing
- [ ] better responsive and UX
- [ ] more scallable arquitecture and better folder structure
- [ ] filtering buttons (show only some ToDos...)

