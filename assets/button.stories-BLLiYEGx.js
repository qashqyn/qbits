import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{O as n}from"./iframe-JfiehphH.js";import{t as r}from"./jsx-runtime-BGU0mfus.js";import{a as i,i as a,n as o,r as s,s as c,t as l}from"./utils-ClwRAVT9.js";var u,d,f,p,m=t((()=>{u=e(n()),c(),a(),o(),d=r(),f=s(`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,{variants:{variant:{default:`bg-primary text-primary-foreground hover:bg-primary/90`,destructive:`bg-destructive text-destructive-foreground hover:bg-destructive/90`,outline:`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground`,link:`text-primary underline-offset-4 hover:underline`},size:{default:`h-10 px-4 py-2`,sm:`h-9 rounded-md px-3`,lg:`h-11 rounded-md px-8`,icon:`h-10 w-10`}},defaultVariants:{variant:`default`,size:`default`}}),p=u.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},o)=>(0,d.jsx)(r?i:`button`,{className:l(f({variant:t,size:n,className:e})),ref:o,...a})),p.displayName=`Button`,p.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{asChild:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`ExtendableVariants`]}})),h,g,_,v,y,b,x;t((()=>{m(),h=r(),g={title:`Atoms/Actions/Button`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`destructive`,`outline`,`secondary`,`ghost`,`link`]},size:{control:`select`,options:[`default`,`sm`,`lg`,`icon`]}}},_={args:{children:`Button`,variant:`default`,size:`default`}},v={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,h.jsx)(p,{variant:`default`,children:`Default`}),(0,h.jsx)(p,{variant:`secondary`,children:`Secondary`}),(0,h.jsx)(p,{variant:`destructive`,children:`Destructive`}),(0,h.jsx)(p,{variant:`outline`,children:`Outline`}),(0,h.jsx)(p,{variant:`ghost`,children:`Ghost`}),(0,h.jsx)(p,{variant:`link`,children:`Link`})]})},y={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap items-end gap-4`,children:[(0,h.jsx)(p,{size:`sm`,children:`Small`}),(0,h.jsx)(p,{size:`default`,children:`Default`}),(0,h.jsx)(p,{size:`lg`,children:`Large`}),(0,h.jsx)(p,{size:`icon`,children:(0,h.jsx)(`span`,{children:`+`})})]})},b={args:{asChild:!0,children:(0,h.jsx)(`a`,{href:`https://github.com`,children:`GitHub Link`}),variant:`outline`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    size: "default"
  }
}`,..._.parameters?.docs?.source},description:{story:`The default interactive button.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">\r
      <Button variant="default">Default</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...v.parameters?.docs?.source},description:{story:`A showcase of all button variants in a single view.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-end gap-4">\r
      <Button size="sm">Small</Button>\r
      <Button size="default">Default</Button>\r
      <Button size="lg">Large</Button>\r
      <Button size="icon">\r
        <span>+</span>\r
      </Button>\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:`A showcase of all button sizes.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="https://github.com">GitHub Link</a>,
    variant: "outline"
  }
}`,...b.parameters?.docs?.source},description:{story:`Demonstrating the 'asChild' property (Radix Slot) using an anchor tag.`,...b.parameters?.docs?.description}}},x=[`Default`,`AllVariants`,`AllSizes`,`AsChild`]}))();export{y as AllSizes,v as AllVariants,b as AsChild,_ as Default,x as __namedExportsOrder,g as default};