enum CompanyPlan {
  FREE = 'FREE', // shared runner and shared compiles
  STANDARD = 'STANDARD', // 1 dedicated runner, 1 dedicated compiler
  PREMIUM = 'PREMIUM', // 1 dedicated runner, 1 dedicated compiler + extra hours billed
  CUSTOM = 'CUSTOM', // X dedicated runner, X dedicated compiler + extra hours billed, X cpu, X ram
}
