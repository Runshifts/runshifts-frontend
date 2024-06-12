"use client"
import React, { useCallback, useEffect, useState } from "react"
import AuthInputAndLabel from "./Inputs"
import { IoChevronDown } from "react-icons/io5"
import useAxios from "../../_hooks/useAxios"
import DropDown from "../AppComps/Dropdown"
import { Option } from "../AppComps/Select"

export default function DebouncedDropdownSearch({
  selectedId,
  handleOptionSelect,
  pathName,
  placeholder
}) {
  const fetchData = useAxios()
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [loadingResults, setLoadingResults] = useState(false)
  const handleSearchTextChange = useCallback(
    (e) => {
      setSearchText((prev) => {
        if (e.target.value.length < prev.length && selectedId?.length > 0)
          return ""
        else return e.target.value
      })
      if (e.target.value.trim().length > 0) {
        handleOptionSelect(null)
        setLoadingResults(true)
      }
    },
    [selectedId]
  )

  const handleSearch = useCallback(
    async (searchText) => {
      const data = await fetchData(
        `/${pathName}?search=${searchText}&limit=20`,
        "get"
      )
      if (data.statusCode === 200) setSearchResults(data.results)
      else setSearchResults([])
      setLoadingResults(false)
    },
    [fetchData, pathName]
  )

  useEffect(() => {
    const delayOrganizationSearchTimerId = setTimeout(() => {
      searchText.trim().length > 0 && handleSearch(searchText.trim())
      searchText.trim().length === 0 && setSearchResults([])
    }, 500)
    return () => clearTimeout(delayOrganizationSearchTimerId)
  }, [searchText, handleSearch])

  return (
    <DropDown
      dropDownTrigger={
        <AuthInputAndLabel
          labelText="What kind of industry are you in?"
          inputProps={{
            value: "",
            type: "text",
            value: searchText,
            onChange: handleSearchTextChange,
            placeholder: placeholder || "",
            value: searchText,
          }}
          endAdornment={<IoChevronDown size={20} color="#292D32" />}
        />
      }
      dropdownContent={
        <ul className="relative w-full z-[20]">
          {searchResults.length === 0 &&
            searchText.length > 0 &&
            loadingResults === false && (
              <p className="text-center px-4 py-[6px]">No matching results</p>
            )}
          {loadingResults === true && searchText.length > 0 && (
            <p className="px-4 py-[6px]">Loading...</p>
          )}
          {searchResults.map((opt) => (
            <Option
              key={opt._id}
              onClick={() => {
                handleOptionSelect(opt)
                console.log(opt)
                setSearchText(opt.name)
              }}
            >
              {opt.name}
            </Option>
          ))}
        </ul>
      }
    />
  )
}
