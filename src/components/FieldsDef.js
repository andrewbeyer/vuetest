import VuetableFieldSwitch from './VuetableFieldSwitch.vue'

export default [
  {
    name: VuetableFieldSwitch,
    title: 'Toggle Switch',
    titleClass: 'center aligned',
    dataClass: 'left aligned',
    switch: {
      // label: 'Male?',
      label: (data) => data.name,
      field: (data) => data.gender === 'M',
    }
  },
  {
    name: "name",
    title: '<i class="grey user outline icon"></i>Name',
    width: "20%",
    sortField: "name"
  },
  {
    name: "email",
    title: '<i class="grey mail outline icon"></i>Email',
    width: "20%",
    sortField: "email"
  },
  {
    name: "group.description",
    sortField: "group_id",
    title: '<i class="grey sitemap icon"></i>Group',
    width: "15%"
  },
  {
    name: "gender",
    title: '<i class="grey heterosexual icon"></i>Gender',
    titleClass: "center aligned",
    dataClass: "center aligned",
    width: "15%",
    formatter: value => {
      return value.toUpperCase() === "M"
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>';
    },
    sortField: "gender"
  },
];
