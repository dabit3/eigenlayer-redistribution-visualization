"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowRight, Flame, Users, Shield, DollarSign, Zap, CheckCircle, Building2, TrendingUp, AlertTriangle, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SlashingVisualization() {
  // Always animating - no state needed, just use CSS animations
  const traditionalAnimating = true
  const redistributionAnimating = true

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="pt-10 text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/50 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700 tracking-wide">EigenLayer Protocol</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
              EigenLayer Redistribution
            </h1>
            <a 
              href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-indigo-50 hover:from-slate-100 hover:to-indigo-100 border border-slate-200/60 rounded-full text-base font-medium text-slate-700 hover:text-slate-800 transition-all duration-200 hover:shadow-md hover:scale-105 group"
            >
              <span>Docs</span>
              <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </a>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Compare how both successful operations and slashing scenarios work in traditional vs EigenLayer's redistribution model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <Card className="relative overflow-hidden flex flex-col bg-gradient-to-br from-white to-orange-50/30 border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Flame className="h-5 w-5 text-orange-600" />
                  </div>
                  Traditional Model
                </CardTitle>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">Success + Burning</Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Stakers delegate to operators who provide services to AVS. Success brings rewards, but slashed funds are permanently destroyed when operators fail.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between space-y-4 relative z-10">
              <div className="flex flex-col items-center space-y-2">
                {/* Staker */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg animate-pulse">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Staker</span>
                
                {/* Arrow down */}
                <ArrowDown className="h-4 w-4 text-orange-500 animate-bounce drop-shadow-sm" />
                
                {/* Operator */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 shadow-lg animate-pulse">
                  <Shield className="h-5 w-5 text-yellow-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Operator</span>
                
                {/* Arrow down to AVS */}
                <ArrowDown className="h-4 w-4 text-orange-500 animate-bounce drop-shadow-sm" />
                
                {/* AVS */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 border-2 border-indigo-300 shadow-lg animate-pulse">
                  <Building2 className="h-5 w-5 text-indigo-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">AVS</span>
                
                {/* Branching paths */}
                <div className="flex items-center space-x-6 mt-2">
                  {/* Success path */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="text-xs font-bold text-emerald-700 bg-gradient-to-r from-emerald-100 to-emerald-200 px-2 py-1 rounded-full border border-emerald-300 shadow-sm">Success</div>
                    <ArrowDown className="h-3 w-3 text-emerald-500 animate-bounce drop-shadow-sm" />
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-300 shadow-lg animate-pulse">
                      <CheckCircle className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">Rewards</span>
                  </div>
                  
                  {/* Failure path */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="text-xs font-bold text-red-700 bg-gradient-to-r from-red-100 to-red-200 px-2 py-1 rounded-full border border-red-300 shadow-sm">Failure</div>
                    <ArrowDown className="h-3 w-3 text-orange-500 animate-bounce drop-shadow-sm" />
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-red-200 border-2 border-orange-300 shadow-lg animate-pulse">
                      <Flame className="h-4 w-4 text-orange-600" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">Burned</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-orange-50/50 p-5 rounded-xl border border-slate-200/50 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  What Happens:
                </h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><span className="text-emerald-700 font-semibold">Success:</span> Operator serves AVS correctly, rewards distributed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Flame className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><span className="text-red-700 font-semibold">Failure:</span> AVS slashes operator, funds permanently burned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    </div>
                    <span>No compensation for affected parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                    </div>
                    <span>Value completely lost from ecosystem</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden flex flex-col bg-gradient-to-br from-white to-purple-50/30 border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  Redistribution Model
                </CardTitle>
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">Success + Redistribution</Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Stakers delegate to operators who provide services to AVS. Success brings rewards, and AVS can redirect slashed funds to compensate harmed parties.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between space-y-4 relative z-10">
              <div className="flex flex-col items-center space-y-2">
                {/* Staker */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg animate-pulse">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Staker</span>
                
                {/* Arrow down */}
                <ArrowDown className="h-4 w-4 text-purple-500 animate-bounce drop-shadow-sm" />
                
                {/* Operator */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 shadow-lg animate-pulse">
                  <Shield className="h-5 w-5 text-yellow-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">Operator</span>
                
                {/* Arrow down to AVS */}
                <ArrowDown className="h-4 w-4 text-purple-500 animate-bounce drop-shadow-sm" />
                
                {/* AVS */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 border-2 border-indigo-300 shadow-lg animate-pulse">
                  <Building2 className="h-5 w-5 text-indigo-700" />
                </div>
                <span className="text-xs font-semibold text-slate-800">AVS</span>
                
                {/* Branching paths */}
                <div className="flex items-start space-x-4 mt-2">
                  {/* Success path */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="text-xs font-bold text-emerald-700 bg-gradient-to-r from-emerald-100 to-emerald-200 px-2 py-1 rounded-full border border-emerald-300 shadow-sm">Success</div>
                    <ArrowDown className="h-3 w-3 text-emerald-500 animate-bounce drop-shadow-sm" />
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-300 shadow-lg animate-pulse">
                      <CheckCircle className="h-4 w-4 text-emerald-700" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">Rewards</span>
                  </div>
                  
                  {/* Failure - Redistribution path */}
                  <div className="flex flex-col items-center space-y-1">
                    <div className="text-xs font-bold text-red-700 bg-gradient-to-r from-red-100 to-red-200 px-2 py-1 rounded-full border border-red-300 shadow-sm">Failure</div>
                    <ArrowDown className="h-3 w-3 text-red-500 animate-bounce drop-shadow-sm" />
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 shadow-lg animate-pulse">
                      <Shield className="h-4 w-4 text-red-600" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">Slashed</span>
                    
                    {/* Single redistribution arrow pointing TO recipient */}
                    <div className="flex justify-center mt-1">
                      <div className="flex flex-col items-center space-y-1">
                        <ArrowDown className="h-3 w-3 text-purple-500 animate-bounce drop-shadow-sm" />
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg animate-pulse">
                          <DollarSign className="h-4 w-4 text-purple-700" />
                        </div>
                        <span className="text-xs font-medium text-slate-700">Recipient</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-purple-50/50 p-5 rounded-xl border border-slate-200/50 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  What Happens:
                </h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><span className="text-emerald-700 font-semibold">Success:</span> Operator serves AVS correctly, rewards distributed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span><span className="text-red-700 font-semibold">Failure:</span> AVS slashes operator, funds sent to redistribution recipient</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>AVS can compensate harmed parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    </div>
                    <span>Value stays within the ecosystem</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>


        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Benefits of Redistribution</CardTitle>
            <CardDescription>
              EigenLayer Redistribution enables new use cases and improves capital efficiency.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Harmed Party Compensation</h3>
                <p className="text-sm text-slate-600">Affected parties can be directly compensated from slashed funds instead of taking a total loss</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Incentive Alignment</h3>
                <p className="text-sm text-slate-600">Reliable operators can be rewarded with redistributed funds, creating stronger incentives</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Capital Efficiency</h3>
                <p className="text-sm text-slate-600">Value remains in the ecosystem and can be used productively rather than being destroyed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 bg-gradient-to-br from-white to-indigo-50/30 border-indigo-200/50 shadow-xl">
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full border border-indigo-200/50 mb-4 mx-auto">
              <Zap className="h-4 w-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-800 tracking-wide">Powered by Redistribution</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent">
                Use Cases Enabled by Redistribution
              </CardTitle>
              <a 
                href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200/60 rounded-full text-sm font-medium text-indigo-700 hover:text-indigo-800 transition-all duration-200 hover:shadow-md hover:scale-105 group"
              >
                <span>Docs</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
            </div>
            <CardDescription className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real-world applications that benefit from redistributable slashing mechanisms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Insurance Protocols */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Insurance Protocols</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">Risk Coverage</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">When operators fail to provide coverage, slashed funds can directly compensate affected policyholders, creating the first truly decentralized insurance with guaranteed payouts.</p>
                </div>
              </div>

              {/* Lending Platforms */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-300 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Lending Platforms</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-emerald-700 uppercase tracking-wide">Capital Protection</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">Failed loan commitments trigger automatic redistribution to protect lenders and maintain protocol stability, enabling higher leverage with built-in safety nets.</p>
                </div>
              </div>

              {/* Cross-chain Bridges */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Cross-chain Bridges</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-purple-700 uppercase tracking-wide">SLA Guarantees</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">SLA violations automatically redistribute funds to users affected by delayed or failed transactions, creating bridges with credible uptime guarantees and user protection.</p>
                </div>
              </div>

              {/* Stablecoin Protocols */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-300 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-orange-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Stablecoin Protocols</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-orange-700 uppercase tracking-wide">Yield Protection</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed">Operator failures in yield generation trigger redistribution to protect stablecoin holders, enabling sustainable yields with downside protection and peg stability.</p>
                </div>
              </div>
            </div>

            {/* Bottom highlight section */}
            <div className="mt-12 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-2xl border border-indigo-200/50">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-200 border-2 border-indigo-300 shadow-lg mb-4">
                  <Zap className="h-8 w-8 text-indigo-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">The Redistribution Advantage</h3>
                <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  Unlike traditional slashing that permanently destroys value, redistribution creates a closed-loop system where 
                  economic security translates directly into user protection and ecosystem sustainability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cap Implementation Section */}
        <Card className="mb-16 bg-gradient-to-br from-white to-blue-50/30 border-blue-200/50 shadow-xl">
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full border border-blue-200/50 mb-6 mx-auto">
              <Building2 className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800 tracking-wide">Real-World Implementation</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 bg-clip-text text-transparent">
                Cap Protocol: Redistribution in Action
              </CardTitle>
              <a 
                href="https://x.com/capmoney_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200/60 rounded-full text-sm font-medium text-blue-700 hover:text-blue-800 transition-all duration-200 hover:shadow-md hover:scale-105 group"
              >
                <span>Learn more</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
            </div>
            <CardDescription className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The first stablecoin with credible financial guarantees using EigenLayer's redistribution mechanism
            </CardDescription>
            
            {/* How Cap Uses Redistribution - Sub Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">How Cap Uses Redistribution</h3>
            </div>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Cap creates a decentralized marketplace for yield generation, protecting stablecoin holders through redistribution
            </p>
          </CardHeader>
            <CardContent className="space-y-8">
              {/* Flow Diagram */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Stablecoin Holders */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 shadow-lg animate-pulse">
                    <DollarSign className="h-8 w-8 text-green-700" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Cap Stablecoin Holders</span>
                  <span className="text-xs text-slate-600 text-center max-w-24">Provide capital, earn yield</span>
                </div>

                <ArrowRight className="h-6 w-6 text-blue-500 animate-bounce hidden lg:block" />
                <ArrowDown className="h-6 w-6 text-blue-500 animate-bounce lg:hidden" />

                {/* Institutional Operators */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 shadow-lg animate-pulse">
                    <Building2 className="h-8 w-8 text-blue-700" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Institutional Operators</span>
                  <span className="text-xs text-slate-600 text-center max-w-24">Banks, HFT firms, Market makers</span>
                </div>

                <ArrowRight className="h-6 w-6 text-blue-500 animate-bounce hidden lg:block" />
                <ArrowDown className="h-6 w-6 text-blue-500 animate-bounce lg:hidden" />

                {/* Yield Generation */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg animate-pulse">
                    <TrendingUp className="h-8 w-8 text-purple-700" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">Yield Generation</span>
                  <span className="text-xs text-slate-600 text-center max-w-24">Competitive returns under any conditions</span>
                </div>
              </div>

              {/* Slashing Scenario */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200/50">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  When Things Go Wrong: Redistribution Protection
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">The Problem:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Institutional operator makes bad investment decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Stablecoin holders face potential losses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Traditional systems offer no recourse</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Cap's Solution:</h4>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Malicious operator gets slashed automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Slashed funds redistribute to affected stablecoin holders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Autonomous & verifiable protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Innovation */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200/50">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Key Innovation: Marketplace Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 mx-auto mb-3">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">No Central Team</h4>
                    <p className="text-xs text-slate-600">Unlike traditional stablecoins, Cap doesn't rely on slow DAOs or fund managers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mx-auto mb-3">
                      <Building2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Decentralized Marketplace</h4>
                    <p className="text-xs text-slate-600">Connects capital, strategy, and security like Uber connects riders and drivers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mx-auto mb-3">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Credible Guarantees</h4>
                    <p className="text-xs text-slate-600">First stablecoin with verifiable financial protection through redistribution</p>
                  </div>
                </div>
              </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}