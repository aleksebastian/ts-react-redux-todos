import React from "react";

import { setVisibilityFilter, VisibilityFilter } from "./visibilityFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { current } from "@reduxjs/toolkit";

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

export default function FilterButton({
  visibilityFilter,
  text,
}: FilterButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );

  return (
    <button
      disabled={currentVisibilityFilter === visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
    >
      {text}
    </button>
  );
}
