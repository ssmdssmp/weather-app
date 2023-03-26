const ListHeader = () => {
  const dispatch = useAppDispatch();
  const {query} = useAppSelector(getSearchSelector);
  return (
    <StyledInput
      value={query}
      onChangeText={e => dispatch(searchActions.setQuery(e))}
    />
  );
};
