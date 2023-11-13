import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from 'formik';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import React, { useState } from 'react';
import DaysOfWeekSelector from './Day';
import TimeDropdown from './TimeComp';

export default function RecurringAct() {
  const [selectedType, setSelectedType] = useState(null);
  const [value, setValue] = useState('');

  const typeDropDwn = [
    { name: 'Event', label: 'Event' },
    { name: 'Celebration', label: 'Celebration' },
    { name: 'Trip', label: 'Trip' },
    { name: 'With caregiver(s)', label: 'With caregiver(s)' },
    { name: 'Meal', label: 'Meal' },
    { name: 'Playtime', label: 'Playtime' },
    { name: 'Other', label: 'Other' },
  ];

  const panelFooterTemplate = () => {
    return (
      <div className="py-2 px-3">
        {selectedType ? (
          <span>
            <b>{selectedType.name}</b> selected.
          </span>
        ) : (
          'No Type selected.'
        )}
      </div>
    );
  };

  const handleSubmit = () => {};

  return (
    <Panel>
      <div className="card p-4 w-75 mx-auto">
        <h2>New Recurring Activity</h2>
        <Formik>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="title">Title *</label>
                <InputText
                  id="title"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="type">Type</label>
                <br></br>
                <Dropdown
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.value)}
                  options={typeDropDwn}
                  optionLabel="name"
                  placeholder="Select a Type"
                  panelFooterTemplate={panelFooterTemplate}
                  className="w-75 h-50"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <InputText
                id="description"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              Time
              <div className="d-flex">
                <div>
                  <TimeDropdown />
                </div>
                <label>To</label>
                <div className="scndTime">
                  <TimeDropdown />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  id="allDay"
                  className="form-check-input"
                />
                <label htmlFor="allDay" className="form-check-label">
                  All Day
                </label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <label htmlFor="repeatEveryDay" className="form-check-label">
                  Repeat EveryDay
                </label>
              </div>
              <DaysOfWeekSelector />
            </div>
            <div className="float-end">
              <Button label="Cancel" /> <Button label="Add" />
            </div>
          </form>
        </Formik>
      </div>
    </Panel>
  );
}
