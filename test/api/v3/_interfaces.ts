export interface AddButtonReqM {

  /** 编码名称 */
  code?: string
  /** 菜单id */
  menuId?: string
  /** 权限名称 */
  name?: string

}

export interface AddChargeItemReqM {

  /** 外送 */
  isOutwardDelivery?: boolean
  /** 项目名称 */
  itemName?: string
  /** 分子编号 */
  molecularCodeId?: string
  /** 价格 */
  price?: string
  /** 价格单位 (yuan,dollar,euro) */
  priceUnit?: string
  /** 报告模板 */
  reportTemplateId?: string
  /** 检测项目(二级功法库id) */
  testItem?: string

}

export interface AddDicItemReqM {

  /** 字典code */
  dicCode?: string
  /** 字典子项是不是默认的 */
  isDefault?: boolean
  /** 字典子项code（不是必填的，如果为空，就后台默认guid） */
  itemCode?: string
  /** 字典子项名称 */
  itemName?: string
  /** 排序 */
  sort?: number

}

export interface AddInstitutionReqM {

  /** 科室 */
  departments?: string[]
  /** 机构名称（机构就是医院，一个医院下面有多个科室） */
  name?: string

}

export interface AddLableCfgReqM {

  /** 标签高度（mm） */
  height?: number
  /** 标签名称 */
  name?: string
  /** 模版布局json 字符串 */
  templateJson?: string
  /** 标签宽度（mm） */
  width?: number

}

export interface AddMenuReqM {

  /** 组件名称 */
  componentName?: string
  /** true: 该菜单在角色选菜单的时候显示；false：不显示 */
  isMenuDisplay?: boolean
  /** true: 菜单在新的浏览器tab页打开；false：在本tab页打开 */
  isOpenNewPage?: boolean
  /** 菜单Icon */
  menuIcon?: string
  /** 菜单名称 */
  menuName?: string
  /** 父级id（为空就表示新增的是一级菜单，不为空表示新增的二级菜单） */
  parentId?: string
  /** 路由地址 */
  routeAddress?: string
  /** 路由名称 */
  routeName?: string
  /** 排序号，默认越小，越靠前 */
  sort?: number

}

export interface AddOrModifyRoleSelectBtnReqM {

  /** 菜单id */
  menuIds?: string[]
  /** 角色id */
  roleId?: string

}

export interface AddOrModifyRoleSelectBtnRespM {

  /** 子按钮集合 */
  children?: ButtonModel[]
  /** 菜单id */
  id?: string
  /** true: 选中 false：不选中 */
  isChecked?: boolean
  /** 菜单名 */
  name?: string

}

export interface AddOrModifyRoleSelectBtnRespMListResponseModel {

  code?: string
  data?: AddOrModifyRoleSelectBtnRespM[]
  message?: string

}

export interface AddPathologyLibReqM {

  /** 功法库的中文名 */
  name?: string
  /** 心法编号规则id，参考bd_number_rule 表的id */
  pathologNoRuleId?: string
  /** 功法库类型id，参考bd_pathology_lib_type 表id */
  pathologyLibTypeId?: string
  /** 心法流程id，参考bd_process 表的id */
  processId?: string
  /** 登记输入模板id，参考登记输入模板表的id */
  registerTemplateId?: string
  /** 诊断报告输入模板id，参考诊断报告输入模板表的id */
  reportTemplateId?: string
  /** 标本标签模板id，参考标本标签模版表id。如果用户没填，后台配置一个默认值 */
  sampleLableTemplateId?: string
  /** 签发后，在这个分钟数内，临床和用户看不到报告，允许撤回签发。如果用户没填，后台配置一个默认值 */
  signWithdrawMinute?: number
  /** 刀片标签模板id，参考刀片标签模板表id 。如果用户没填，后台配置一个默认值 */
  sliceLableTemplateId?: string
  /** 补充诊断报告输入模板id，参考诊断报告输入模板表的id。如果用户没填，后台配置一个默认值 */
  supplementReportTemplateId?: string

}

export interface AddPathologyLibTypeModel {

  /** 一级心法库的中文名 */
  cName?: string
  /** 一级心法库的英文名 */
  eName?: string

}

export interface AddPathologyNoRuleReqM {

  /** 中间连接符(用户如果不输入，默认为无) */
  middleConnector?: string
  /** 心法号规则配置名 */
  name?: string
  /** 心法号规则前缀（用户如果不输入，默认为空） */
  prefix?: string
  /** 心法号规则流水号长度,默认为4 */
  serialNoLength?: (number | string)
  /** 心法号规则时间格式(用户如果不输入，默认为YYYYMMDD) */
  timeFormat?: string

}

export interface AddProcessReqM {

  /** 流程名字 */
  name?: string
  /** 是否开启初诊分配 */
  openIniDiagAssign?: boolean
  /** 是否开启初诊确认 */
  openIniDiagConfirm?: boolean
  /** 流程归属code */
  processBelongCode?: string
  /** 流程来源code */
  processSourceCode?: string
  /** 流程包含哪些步骤code和name 数组 */
  processStepCodeAndNameList?: ProcessStepSimpleInfo[]
  /** 标本类型code */
  sampleTypeCode?: string

}

export interface AddRoleReqM {

  /** 角色名称 */
  roleName?: string
  /** 选中的按钮集合 */
  selectedBtnIds?: string[]
  /** 选中的菜单集合 */
  selectedMenuIds?: string[]

}

export interface AddSampleReqM {

  /** 大体描述模版结合 */
  generalDescriptionTemplate?: string[]
  /** 功法库id */
  pathologyLibId?: string
  /** 标本中文名称 */
  sampleCnName?: string
  /** 标本英文名称 */
  sampleEnName?: string

}

export interface AddUserReqM {

  /** 机构id集合 */
  institutionIds?: string[]
  /** 密码 */
  password?: string
  /** 确认密码 */
  passwordConfirm?: string
  /** 用户真名（用户名称） */
  realName?: string
  /** 用户角色ids */
  roleIds?: string[]
  /** 电话 */
  telephone?: string
  /** 账号（用户名） */
  userName?: string

}

export interface BtnInfo {

  /** 按钮的编码 */
  btnCode?: string
  /** 按钮id */
  btnId?: string
  /** 按钮名字 */
  btnName?: string

}

export interface ButtonModel {

  /** 按钮id */
  id?: string
  /** true: 选中 false：不选中 */
  isChecked?: boolean
  /** 按钮名 */
  name?: string

}

export interface ButtonPermissionNode {

  /** code */
  btnCode?: string
  /** 名称 */
  btnName?: string
  /** id */
  id?: string

}

export interface DeleteChargeableItemReqM {

  /** 删除项目id */
  id?: string

}

export interface DeleteProcessReqM {

  /** 主键 */
  id?: string

}

export interface DelModel {

  /** 被删除对象的id */
  id?: string

}

export interface DelPathologyNoRuleReqM {

  /** 心法号规则id */
  id?: string

}

export interface DicItemReqM {

  /** 字典code */
  dicCode?: string

}

export interface DicItemRespM {

  /** code */
  code?: string
  /** 主键 */
  id?: string
  /** 是不是默认的 true：是字典子项默认值 false：不是字典子项默认值 */
  isDefault?: boolean
  /** 名称 */
  name?: string

}

export interface DicItemRespMListResponseModel {

  code?: string
  data?: DicItemRespM[]
  message?: string

}

export interface EmptyReqM {

}

export interface EmptyReqMPagedRequestModel {

  /** 页数 */
  pageIndex?: number
  /** 每页多少条 */
  pageSize?: number
  searchCondition?: EmptyReqM

}

export interface EmptyReqMResponseModel {

  code?: string
  data?: EmptyReqM
  message?: string

}

export interface EnableOrDisableReqM {

  /** id */
  id?: string
  /** true：启用 false：禁用 */
  isEnable?: boolean

}

export interface GetProcessInfoListReqM {

  /** 流程所属code */
  processBelongCode?: string

}

export interface GetProcessInfoListRespM {

  /** 大样本加时 */
  bigSampleAddTime?: number
  /** 大样本加时单位 */
  bigSampleAddTimeUnit?: string
  /** 大样本加时单位text */
  bigSampleAddTimeUnitText?: string
  /** 主键 */
  id?: string
  /** 流程的名字 */
  name?: string
  /** 总时长超时前多久通知 */
  preTotalTimeOutInform?: number
  /** 总时长超时前多久通知人id集合 */
  preTotalTimeOutInformPeopleIds?: string[]
  /** 总时长超时前多久通知的单位 */
  preTotalTimeOutInformUnit?: string
  /** 总时长超时前多久通知的单位text */
  preTotalTimeOutInformUnitText?: string
  /** 流程包含哪些步骤 */
  processStepInfos?: ProcessStepModelForTimeOutConfig[]
  /** 总时长 */
  totalTime?: number
  /** 总时长超时通知人id结合 */
  totalTimeOutInformPeopleIds?: string[]
  /** 总时长单位 */
  totalTimeUnit?: string
  /** 总时长单位text */
  totalTimeUnitText?: string

}

export interface GetProcessInfoListRespMListResponseModel {

  code?: string
  data?: GetProcessInfoListRespM[]
  message?: string

}

export interface GetSelectMenuTreeForRoleReqM {

  /** 角色id (null: 表示新建角色，选择菜单 不是null：表示修改角色，选择菜单) */
  roleId?: string

}

export interface GuidAndNameModel {

  /** id */
  id?: string
  /** 名称 */
  name?: string

}

export interface GuidResponseModel {

  code?: string
  data?: string
  message?: string

}

export interface IdNameRespM {

  /** id */
  id?: string
  /** 名称 */
  name?: string

}

export interface IdNameRespMListResponseModel {

  code?: string
  data?: IdNameRespM[]
  message?: string

}

export interface LabelCfg {

  /** 标签高度（mm） */
  height?: number
  /** 主键 */
  id?: string
  /** 标签名称 */
  name?: string
  /** 模版布局json 字符串 */
  templateJson?: string
  /** 标签宽度（mm） */
  width?: number

}

export interface LabelCfgListResponseModel {

  code?: string
  data?: LabelCfg[]
  message?: string

}

export interface LoginMenuRespM {

  /** 子button */
  childButtonList?: BtnInfo[]
  /** 子菜单集合 */
  childMemuList?: LoginMenuRespM[]
  /** 组件名称 */
  componentName?: string
  /** 主键 */
  id?: string
  /** true: 该菜单在角色选菜单的时候显示；false：不显示 */
  isMenuDisplay?: boolean
  /** true: 菜单在新的浏览器tab页打开；false：在本tab页打开 */
  isOpenNewPage?: boolean
  /** 菜单Icon */
  menuIcon?: string
  /** 菜单名称 */
  menuName?: string
  /** 路由地址 */
  routeAddress?: string
  /** 路由名称 */
  routeName?: string
  /** 排序号，默认越小，越靠前 */
  sort?: number

}

export interface LoginReqM {

  /** 登录机构 */
  institutionId?: string
  /** 密码 */
  password?: string
  /** 账号（用户名） */
  userName?: string

}

export interface LoginRespM {

  /** 菜单集合 */
  menuBtnList?: LoginMenuRespM[]
  /** 真名 */
  realName?: string
  /** 电话 */
  telephone?: string
  /** 授权jwt 字符串 */
  token?: string

}

export interface LoginRespMResponseModel {

  code?: string
  data?: LoginRespM
  message?: string

}

export interface MenuNode {

  /** 子菜单 */
  children?: MenuNode[]
  /** 菜单id */
  id?: string
  /** true: 选中 false：不选中 */
  isChecked?: boolean
  /** 菜单名称 */
  menuName?: string

}

export interface MenuNodeForBtn {

  /** 子菜单 */
  childrenMenu?: MenuNodeForBtn[]
  /** 组件名称 */
  componentName?: string
  /** 菜单id */
  id?: string
  /** true: 该菜单在角色选菜单的时候显示；false：不显示 */
  isMenuDisplay?: boolean
  /** true: 菜单在新的浏览器tab页打开；false：在本tab页打开 */
  isOpenNewPage?: boolean
  /** 菜单Icon */
  menuIcon?: string
  /** 菜单名称 */
  menuName?: string
  /** 父级id */
  parentId?: string
  /** 路由地址 */
  routeAddress?: string
  /** 路由名称 */
  routeName?: string
  /** 排序号，默认越小，越靠前 */
  sort?: number

}

export interface MenuNodeForBtnListResponseModel {

  code?: string
  data?: MenuNodeForBtn[]
  message?: string

}

export interface MenuNodeListResponseModel {

  code?: string
  data?: MenuNode[]
  message?: string

}

export interface ModifyButtonReqM {

  /** 编码名称 */
  code?: string
  /** button 的id */
  id?: string
  /** 菜单id */
  menuId?: string
  /** 权限名称 */
  name?: string

}

export interface ModifyChargeItemReqM {

  /** 主键 */
  id?: string
  /** 外送 */
  isOutwardDelivery?: boolean
  /** 项目名称 */
  itemName?: string
  /** 分子编号 */
  molecularCodeId?: string
  /** 价格 */
  price?: string
  /** 价格单位 (yuan,dollar,euro) */
  priceUnit?: string
  /** 报告模板 */
  reportTemplateId?: string
  /** 检测项目(二级功法库id) */
  testItem?: string

}

export interface ModifyDicItemReqM {

  /** 主键 */
  id?: string
  /** 字典子项是不是默认的 */
  isDefault?: boolean
  /** 字典子项code（不是必填的，如果为空，就后台默认guid） */
  itemCode?: string
  /** 字典子项名称 */
  itemName?: string
  /** 排序 */
  sort?: number

}

export interface ModifyLableCfgReqM {

  /** 标签高度（mm） */
  height?: number
  /** 待修改模版id */
  id?: string
  /** 标签名称 */
  name?: string
  /** 模版布局json 字符串 */
  templateJson?: string
  /** 标签宽度（mm） */
  width?: number

}

export interface ModifyMenuReqM {

  /** 组件名称 */
  componentName?: string
  /** 被修改的记录的id */
  id?: string
  /** true: 该菜单在角色选菜单的时候显示；false：不显示 */
  isMenuDisplay?: boolean
  /** true: 菜单在新的浏览器tab页打开；false：在本tab页打开 */
  isOpenNewPage?: boolean
  /** 菜单Icon */
  menuIcon?: string
  /** 菜单名称 */
  menuName?: string
  /** 父级id（为空就表示新增的是一级菜单，不为空表示新增的二级菜单） */
  parentId?: string
  /** 路由地址 */
  routeAddress?: string
  /** 路由名称 */
  routeName?: string
  /** 排序号，默认越小，越靠前 */
  sort?: number

}

export interface ModifyPathologyLibModel {

  /** 心法库id */
  id?: string
  /** 功法库的中文名 */
  name?: string
  /** 心法编号规则id，参考bd_number_rule 表的id */
  pathologNoRuleId?: string
  /** 功法库类型id，参考bd_pathology_lib_type 表id */
  pathologyLibTypeId?: string
  /** 心法流程id，参考bd_process 表的id */
  processId?: string
  /** 登记输入模板id，参考登记输入模板表的id */
  registerTemplateId?: string
  /** 诊断报告输入模板id，参考诊断报告输入模板表的id */
  reportTemplateId?: string
  /** 标本标签模板id，参考标本标签模版表id。如果用户没填，后台配置一个默认值 */
  sampleLableTemplateId?: string
  /** 签发后，在这个分钟数内，临床和用户看不到报告，允许撤回签发。如果用户没填，后台配置一个默认值 */
  signWithdrawMinute?: number
  /** 刀片标签模板id，参考刀片标签模板表id 。如果用户没填，后台配置一个默认值 */
  sliceLableTemplateId?: string
  /** 补充诊断报告输入模板id，参考诊断报告输入模板表的id。如果用户没填，后台配置一个默认值 */
  supplementReportTemplateId?: string

}

export interface ModifyPathologyLibTypeModel {

  /** 一级心法库的中文名 */
  cName?: string
  /** 一级心法库的英文名 */
  eName?: string
  /** 主键 */
  id?: string

}

export interface ModifyPathologyLibTypeModelListResponseModel {

  code?: string
  data?: ModifyPathologyLibTypeModel[]
  message?: string

}

export interface ModifyPathologyNoRuleReqM {

  /** 主键 */
  id?: string
  /** 中间连接符(用户如果不输入，默认为无) */
  middleConnector?: string
  /** 心法号规则配置名 */
  name?: string
  /** 心法号规则前缀（用户如果不输入，默认为空） */
  prefix?: string
  /** 心法号规则流水号长度,默认为4 */
  serialNoLength?: (number | string)
  /** 心法号规则时间格式(用户如果不输入，默认为YYYYMMDD) */
  timeFormat?: string

}

export interface ModifyProcessReqM {

  /** 主键 */
  id?: string
  /** 流程名字 */
  name?: string
  /** 是否开启初诊分配 */
  openIniDiagAssign?: boolean
  /** 是否开启初诊确认 */
  openIniDiagConfirm?: boolean
  /** 流程归属code */
  processBelongCode?: string
  /** 流程来源code */
  processSourceCode?: string
  /** 流程包含哪些步骤code和name 数组 */
  processStepCodeAndNameList?: ProcessStepSimpleInfo[]
  /** 标本类型code */
  sampleTypeCode?: string

}

export interface ModifyRoleReqM {

  /** 角色id */
  id?: string
  /** 角色名称 */
  roleName?: string
  /** 选中的按钮集合 */
  selectedBtnIds?: string[]
  /** 选中的菜单集合 */
  selectedMenuIds?: string[]

}

export interface ModifySampleReqM {

  /** 大体描述模版结合 */
  generalDescriptionTemplate?: string[]
  /** 被修改的标本id */
  id?: string
  /** 功法库id */
  pathologyLibId?: string
  /** 标本中文名称 */
  sampleCnName?: string
  /** 标本英文名称 */
  sampleEnName?: string

}

export interface ModifyUpInstitutionReqM {

  /** 科室集合 */
  departmentList?: GuidAndNameModel[]
  /** 主键 */
  institutionId?: string
  /** 机构名称（机构就是医院，一个医院下面有多个科室） */
  institutionName?: string
  /** 新增加的临床科室的名字 */
  newAddDepartmentNames?: string[]

}

export interface ModifyUserReqM {

  /** 用户id */
  id?: string
  /** 机构id集合 */
  institutionIds?: string[]
  /** 密码 */
  password?: string
  /** 确认密码 */
  passwordConfirm?: string
  /** 用户真名（用户名称） */
  realName?: string
  /** 用户角色ids */
  roleIds?: string[]
  /** 电话 */
  telephone?: string
  /** 账号（用户名） */
  userName?: string

}

export interface ObjectResponseModel {

  code?: string
  data?: any
  message?: string

}

export interface PageChargeItemRspM {

  /** 主键 */
  id?: string
  /** 是否外送 1： 是 0：否 */
  isOutwardDelivery?: (number | string)
  /** 是否外送 有两个值： 是 否 */
  isOutwardDeliveryText?: string
  /** 项目名称 */
  itemName?: string
  /** 分子编号id */
  molecularCodeId?: string
  /** 分子编号名称 */
  molecularCodeIdText?: string
  /** 价格 */
  price?: string
  /** 价格单位 code 三个值：yuan，dollar，euro */
  priceUnit?: string
  /** 价格单位Text 三个值：元，美元，欧元 */
  priceUnitText?: string
  /** 报告模板 */
  reportTemplateText?: string
  /** 检测项目 */
  testItemText?: string

}

export interface PageChargeItemRspMPagedRespondModel {

  code?: string
  data?: PageChargeItemRspMPageRespondM
  message?: string

}

export interface PageChargeItemRspMPageRespondM {

  /** 当前页的数据 */
  data?: PageChargeItemRspM[]
  /** 页号 */
  pageIndex?: number
  /** 每页多少条 */
  pageSize?: number
  /** 总的条数 */
  totalCount?: number

}

export interface PagePathologyNoRuleRspM {

  /** id 主键 */
  id?: string
  /** 中间链接符 */
  middleConnector?: string
  /** 中间链接符文本 */
  middleConnectorText?: string
  /** 心法号规则名 */
  name?: string
  /** 心法号规则前缀 */
  prefix?: string
  /** 心法号规则流水号长度,默认为4 */
  serialNoLength?: number
  /** 心法号规则时间格式 */
  timeFormat?: string
  /** 心法号规则时间格式文本 */
  timeFormatText?: string

}

export interface PagePathologyNoRuleRspMPagedRespondModel {

  code?: string
  data?: PagePathologyNoRuleRspMPageRespondM
  message?: string

}

export interface PagePathologyNoRuleRspMPageRespondM {

  /** 当前页的数据 */
  data?: PagePathologyNoRuleRspM[]
  /** 页号 */
  pageIndex?: number
  /** 每页多少条 */
  pageSize?: number
  /** 总的条数 */
  totalCount?: number

}

export interface PathologyLibListReqM {

  /** 心法库分类id */
  pathologyLibTypeId?: string

}

export interface PathologyLibListRespM {

  /** 心法库id */
  id?: string
  /** 功法库的中文名 */
  name?: string
  /** 心法编号规则id，参考bd_number_rule 表的id */
  pathologNoRuleId?: string
  /** 心法编号规则text */
  pathologNoRuleIdText?: string
  /** 功法库类型id，参考bd_pathology_lib_type 表id */
  pathologyLibTypeId?: string
  /** 功法库类型text */
  pathologyLibTypeIdText?: string
  /** 心法流程id，参考bd_process 表的id */
  processId?: string
  /** 心法流程text */
  processIdText?: string
  /** 登记输入模板id，参考登记输入模板表的id */
  registerTemplateId?: string
  /** 登记输入模板text */
  registerTemplateIdText?: string
  /** 诊断报告输入模板id，参考诊断报告输入模板表的id */
  reportTemplateId?: string
  /** 诊断报告输入模板Text */
  reportTemplateIdText?: string
  /** 标本标签模板id，参考标本标签模版表id。如果用户没填，后台配置一个默认值 */
  sampleLableTemplateId?: string
  /** 标本标签模板text */
  sampleLableTemplateIdText?: string
  /** 签发后，在这个分钟数内，临床和用户看不到报告，允许撤回签发。如果用户没填，后台配置一个默认值 */
  signWithdrawMinute?: number
  /** 刀片标签模板id，参考刀片标签模板表id 。如果用户没填，后台配置一个默认值 */
  sliceLableTemplateId?: string
  /** 刀片标签模板Text */
  sliceLableTemplateIdText?: string
  /** 补充诊断报告输入模板id，参考诊断报告输入模板表的id。如果用户没填，后台配置一个默认值 */
  supplementReportTemplateId?: string
  /** 补充诊断报告输入模板text */
  supplementReportTemplateIdText?: string

}

export interface PathologyLibListRespMListResponseModel {

  code?: string
  data?: PathologyLibListRespM[]
  message?: string

}

export interface PathologyLibSampleReqM {

  /** 流程所属code */
  processBelongCode?: string

}

export interface PathologyLibSampleRespM {

  /** 功法库id */
  pathologyLibId?: string
  /** 功法库名 */
  pathologyLibName?: string
  /** 该功法库下的样本集合 */
  samples?: SampleRespM[]

}

export interface PathologyLibSampleRespMListResponseModel {

  code?: string
  data?: PathologyLibSampleRespM[]
  message?: string

}

export interface PermissionNode {

  /** 子按钮 */
  childrenBtn?: ButtonPermissionNode[]
  /** 子菜单 */
  childrenMenu?: PermissionNode[]
  /** id */
  id?: string
  /** 名称 */
  name?: string

}

export interface PermissionNodeListResponseModel {

  code?: string
  data?: PermissionNode[]
  message?: string

}

export interface PermissionTreeReqM {

  /** 权限名或者菜单名 */
  permissionName?: string

}

export interface PreLoginRespM {

  desStr?: string

}

export interface PreLoginRespMResponseModel {

  code?: string
  data?: PreLoginRespM
  message?: string

}

export interface ProcessBelongRespM {

  /** code */
  code?: string
  /** 主键 */
  id?: string
  /** 名称 */
  name?: string
  /** 流程来源 */
  processSources?: DicItemRespM[]
  /** 样本类型 */
  sampleTypes?: DicItemRespM[]
  /** 排序 */
  sort?: number

}

export interface ProcessBelongRespMListResponseModel {

  code?: string
  data?: ProcessBelongRespM[]
  message?: string

}

export interface ProcessDefaultStepReqM {

  /** 细胞心法，标本类型选择标本的时候，有第三级别的流程code */
  cellProcessThreeLevelCode?: string
  /** 流程归属code */
  processBelongCode?: string
  /** 标本类型code */
  sampleTypeCode?: string

}

export interface ProcessListReqM {

  /** 流程归属 */
  processBelongCode?: string

}

export interface ProcessListRespM {

  /** 主键 */
  id?: string
  /** 流程名字 */
  name?: string
  /** 是否开启初诊分配 */
  openIniDiagAssign?: boolean
  /** 开启初诊分配text */
  openIniDiagAssignText?: string
  /** 是否开启初诊确认 */
  openIniDiagConfirm?: boolean
  /** 开启初诊确认text */
  openIniDiagConfirmText?: string
  /** 流程归属code */
  processBelongCode?: string
  /** 流程来源code */
  processSourceCode?: string
  /** 流程来源名称 */
  processSourceCodeText?: string
  /** 流程包含哪些步骤code和name 数组 */
  processStepCodeAndNameList?: ProcessStepSimpleInfo[]
  /** 标本类型code */
  sampleTypeCode?: string
  /** 样本类型名称 */
  sampleTypeCodeText?: string
  /** 流程步骤info字符串形式 */
  strProcessStepInfos?: string

}

export interface ProcessListRespMListResponseModel {

  code?: string
  data?: ProcessListRespM[]
  message?: string

}

export interface ProcessStepModel {

  /** 是不是可以设置超时时间和通知人。 true：可以设置 false：不可以设置 */
  canSetTimeOut?: boolean
  /** 排序使用 */
  sort?: number
  /** 流程步骤code */
  stepCode?: string
  /** 该步骤超时时长 */
  timeOut?: number
  /** 该步骤超时通知多人的id */
  timeOutInformPeopleIds?: string[]
  /** 该步骤超时时长单位 */
  timeOutUnit?: string

}

export interface ProcessStepModelForTimeOutConfig {

  /** 是不是可以设置超时时间和通知人。 true：可以设置 false：不可以设置 */
  canSetTimeOut?: boolean
  /** 排序使用 */
  sort?: number
  /** 流程步骤code */
  stepCode?: string
  /** 步骤code对应的文本 */
  stepCodeText?: string
  /** 该步骤超时时长 */
  timeOut?: number
  /** 该步骤超时通知多人的id */
  timeOutInformPeopleIds?: string[]
  /** 该步骤超时时长单位 */
  timeOutUnit?: string
  /** 超时单位text */
  timeOutUnitText?: string

}

export interface ProcessStepSimpleInfo {

  /** code */
  code?: string
  /** 流程步骤的名称 */
  name?: string
  /** 流程步骤的排序号 */
  sort?: number

}

export interface ProcessStepSimpleInfoListResponseModel {

  code?: string
  data?: ProcessStepSimpleInfo[]
  message?: string

}

export interface SampleRespM {

  /** 大体描述模版结合 */
  generalDescriptionTemplate?: string[]
  /** 主键 */
  id?: string
  /** 参考bd_pathology_lib 表的主键 */
  pathologyLibId?: string
  /** 标本中文名称 */
  sampleCnName?: string
  /** 标本英文名称 */
  sampleEnName?: string

}

export interface SelectChargeItemReqM {

  /** 项目名称 */
  itemName?: string

}

export interface SelectChargeItemReqMPagedRequestModel {

  /** 页数 */
  pageIndex?: number
  /** 每页多少条 */
  pageSize?: number
  searchCondition?: SelectChargeItemReqM

}

export interface SelectInstitutionRespM {

  /** 科室集合 */
  departmentList?: GuidAndNameModel[]
  /** 该机构所属的全乎的科室名称（多个用逗号隔开） */
  departmentLongNames?: string
  /** 该机构所属的短科室名称（多个用逗号隔开） */
  departmentShortNames?: string
  /** id */
  id?: string
  /** 机构id */
  institutionId?: string
  /** 机构名称 */
  institutionName?: string
  /** 名称 */
  name?: string

}

export interface SelectInstitutionRespMListResponseModel {

  code?: string
  data?: SelectInstitutionRespM[]
  message?: string

}

export interface SelectLabelCfgReqM {

  /** 标签名称 */
  name?: string

}

export interface SelectMenuReqM {

  /** 父菜单id（如果为空，表示查询所有一级菜单；如果不为空，表示查询当前父级菜单的所有子菜单） */
  parentId?: string

}

export interface SelectMenuRespM {

  /** 组件名称 */
  componentName?: string
  /** 主键 */
  id?: string
  /** true: 该菜单在角色选菜单的时候显示；false：不显示 */
  isMenuDisplay?: boolean
  /** true: 菜单在新的浏览器tab页打开；false：在本tab页打开 */
  isOpenNewPage?: boolean
  /** 菜单Icon */
  menuIcon?: string
  /** 菜单名称 */
  menuName?: string
  /** 路由地址 */
  routeAddress?: string
  /** 路由名称 */
  routeName?: string
  /** 排序号，默认越小，越靠前 */
  sort?: number

}

export interface SelectMenuRespMListResponseModel {

  code?: string
  data?: SelectMenuRespM[]
  message?: string

}

export interface SelectRoleListRespM {

  /** 角色id */
  id?: string
  /** 角色状态 */
  isEnable?: boolean
  /** 角色的名称 */
  name?: string
  /** 启用，禁用 状态文本 */
  statusText?: string

}

export interface SelectRoleListRespMListResponseModel {

  code?: string
  data?: SelectRoleListRespM[]
  message?: string

}

export interface SetTimeOutReqM {

  /** 大样本加时 */
  bigSampleAddTime?: number
  /** 大样本加时单位 */
  bigSampleAddTimeUnit?: string
  /** 心法流程id值 */
  id?: string
  /** 总时长超时前多久通知 */
  preTotalTimeOutInform?: number
  /** 总时长超时前多久通知人id集合 */
  preTotalTimeOutInformPeopleIds?: string[]
  /** 总时长超时前多久通知的单位 */
  preTotalTimeOutInformUnit?: string
  /** 流程包含哪些步骤 */
  processStepInfos?: ProcessStepModel[]
  /** 总时长 */
  totalTime?: number
  /** 总时长超时通知人id结合 */
  totalTimeOutInformPeopleIds?: string[]
  /** 总时长单位 */
  totalTimeUnit?: string

}

export interface StringResponseModel {

  code?: string
  data?: string
  message?: string

}

export interface TwoLevelPathologyLib {

  /** 二级功法库id */
  twoLevelLibId?: string
  /** 二级功法库名称 */
  twoLevelLibName?: string

}

export interface TwoLevelPathologyLibRespM {

  /** 一级功法库id */
  firstLevelId?: string
  /** 一级功法库名称 */
  firstLevelName?: string
  /** 二级功法库集合 */
  twoLevelPathologyLibs?: TwoLevelPathologyLib[]

}

export interface TwoLevelPathologyLibRespMListResponseModel {

  code?: string
  data?: TwoLevelPathologyLibRespM[]
  message?: string

}

export interface UpdateSortForMenusByMenuIdsReqM {

  /** 菜单id集合 */
  menuIds?: string[]

}

export interface UserListReqM {

  /** 角色集合 */
  roleIds?: string[]
  /** 搜索条件 账号，用户名称 电话 */
  searchVal?: string

}

export interface UserListRespM {

  /** 机构集合 */
  institutionList?: GuidAndNameModel[]
  /** 是不是激活 */
  isEnable?: boolean
  /** 状态文本 */
  isEnableText?: string
  /** 密码 */
  password?: string
  /** 用户姓名 */
  realName?: string
  /** 角色集合 */
  roleList?: SelectRoleListRespM[]
  /** 电话 */
  telephone?: string
  /** 用户id */
  userId?: string
  /** 账号 */
  userName?: string

}

export interface UserListRespMListResponseModel {

  code?: string
  data?: UserListRespM[]
  message?: string

}
