This is an example of how to use the react library.

This example does not follow any well known patterns (flux, reflux, redux...),
however it does use the unidirectional data flow.

Component setup:
Controller(Actions) -----> State(react immutable state) --------> View (the render)---|
^-------------------------------------------------------------------------------------|

Inheritance
AddressLine:React.Component
CountryDropDown:DropDown
StateDropDown:DropDown
DropDown:React.Component
Address:React.Component
AddressCollection:React.Component

Composition:
<AddressCollection>
    <Address>
        <AddressLine />
        <AddressLine />
        <AddressLine />
        <AddressLine />
        <StateDropDown />
        <CountryDropDown />
    </Address>
</AddressCollection>

functional programming paradigm will need to be explored. There seems to be great perform benefit using
first class functions and immutables.
