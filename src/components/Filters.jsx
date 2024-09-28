import { Form, Link, useLoaderData } from "react-router-dom"
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"
import { FormRange } from "./FormRange"
import { FormCheckbox } from "./FormCheckbox"

export const Filters = () => {
  const {meta, params} = useLoaderData()
  const {search, category, company, order, price, shipping} = params

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        {/* SEARCH */}
        <FormInput type="search" label="search product" name='search' defaultValue={search} size='input-sm' />
        {/* CATEGORIES */}
        <FormSelect label="Select Category" name="category" list={meta.categories} defaultValue={category} size="select-sm" />
        {/* COMPANIES */}
        <FormSelect label="Select Company" name="company" list={meta.companies} defaultValue={company} size="select-sm" />
        {/* ORDER */}
        <FormSelect label="Sort By" name="order" list={["a-z", "z-a", "high", "low"]} defaultValue={order} size="select-sm" />
        {/* PRICE */}
        <FormRange name="price" label="Select Price" price={price} size="range-sm" />
        {/* SHIPPING */}
        <FormCheckbox name="shipping" label="Free Shipping" defaultValue={shipping} size="checkbox-sm" />
        {/* BUTTONS */}
        <button type="submit" className="btn btn-primary btn-sm"> Search </button>

        <Link to="/products" className="btn btn-accent btn-sm"> Reset </Link>
    </Form>
  )
}