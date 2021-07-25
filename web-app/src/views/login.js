import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, Checkbox } from '@material-ui/core'

const useFormInput = (initialState) => {
  const [fields, setValues] = useState(initialState)
  const children = (fields.children) || undefined

  return [
    fields,
    function (event) {
      setValues(fields => ({ ...fields, [event.target.id]: event.target.value }))
    },
    children
  ]
}
const FormInput = () => (<div></div>)
function LoginView(props) {
  const [fields, onChangeHandler] = useFormInput({})
  return (
    <Paper variant='outlined' className={'classes.loginBox'}>
      <Grid layout='this-is-not-usable-value, but my idea is to create more layouts and save them like this one'
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className={'form-header'}>
          <title></title>
          <subtitle></subtitle>
          <logo></logo>
          <description></description>
        </Grid>
        <Grid item xs={12} className={'form-content'}>
          <form>
            {[{},{},{}].map(field => <FormInput field={field} onChangeHandler={onChangeHandler} />)}
            {/* <FormControl className={classes.formControl} fullWidth>
              <InputLabel id="demo-simple-select-label">Estado</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                value={appointment.status || 0}
                onChange={handleChange}
                disabled={(!isEditing || isLoading) ? true : undefined}
              >
                <MenuItem value="" disabled>Seleccione estado</MenuItem>
                {statuses && statuses.map((status) =>
                  <MenuItem key={status.id} value={status.id}>{status.description}</MenuItem>
                )}
              </Select>
            </FormControl> */}
            <input type={'password'}></input>
            <input></input>
            <Checkbox>{'I\'ve read and accept the Terms & Conditions'}</Checkbox>
            <button type='submit'></button>
          </form>
        </Grid>
        <Grid item xs={12} className={'form-actions'}>

        </Grid>
      </Grid>
    </Paper>
  )
}

LoginView.propTypes = {

}

export default LoginView

