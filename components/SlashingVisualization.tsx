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
    <div className="
    min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 p-4
    md:p-8
    " style={{background: 'linear-gradient(to bottom right, #f0f4ff, #ffffff, #f8fafc)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="pt-10 text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border-2 mb-6" style={{borderColor: '#B7C0E9'}}>
            <img 
              src="/eigenlayer-logo.svg" 
              alt="EigenLayer Logo" 
              className="w-5 h-5 opacity-80"
              style={{filter: 'brightness(0) saturate(100%) invert(8%) sepia(33%) saturate(4766%) hue-rotate(233deg) brightness(93%) contrast(101%)'}}
            />
            <span className="text-sm font-semibold tracking-wide" style={{color: '#020F2C'}}>EigenLayer Protocol</span>
          </div>
          <div className="
          flex items-center justify-center gap-4 mb-2
          md:mb-6
          ">
            <h1 className="
            text-5xl font-bold leading-tight
            " style={{background: 'linear-gradient(to right, #3730a3, #4338ca, #581c87)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              EigenLayer Redistribution
            </h1>
            <a 
              href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
              hidden
              md:inline-flex 
              "
              style={{
                background: 'linear-gradient(to right, #f8fafc, rgba(183, 192, 233, 0.1))',
                border: '1px solid #B7C0E9',
                color: '#020F2C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #f1f5f9, rgba(183, 192, 233, 0.2))';
                e.currentTarget.style.color = '#1A0C6D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #f8fafc, rgba(183, 192, 233, 0.1))';
                e.currentTarget.style.color = '#020F2C';
              }}
            >
              <span>Docs</span>
              <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </a>
          </div>
          <a 
              href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="items-center gap-2 px-4 py-2 rounded-full text-base font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
              inline-flex 
              md:hidden
              mb-4
              "
              style={{
                background: 'linear-gradient(to right, #f8fafc, rgba(183, 192, 233, 0.1))',
                border: '1px solid #B7C0E9',
                color: '#020F2C'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #f1f5f9, rgba(183, 192, 233, 0.2))';
                e.currentTarget.style.color = '#1A0C6D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #f8fafc, rgba(183, 192, 233, 0.1))';
                e.currentTarget.style.color = '#020F2C';
              }}
            >
              <span>Docs</span>
              <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </a>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{color: '#020F2C'}}>
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

        <Card className="mb-12 shadow-xl" style={{background: 'linear-gradient(to bottom right, #ffffff, rgba(183, 192, 233, 0.05))', border: '1px solid #B7C0E9'}}>
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-4 mx-auto" style={{background: 'linear-gradient(to right, rgba(26, 12, 109, 0.05), rgba(66, 61, 219, 0.05))', borderColor: '#B7C0E9'}}>
              <Zap className="h-4 w-4" style={{color: '#1A0C6D'}} />
              <span className="text-sm font-semibold tracking-wide" style={{color: '#020F2C'}}>Powered by Redistribution</span>
            </div>
            <div className="flex items-center justify-center gap-3 
            mb-2
            sm:mb-4
            mx-auto">
              <CardTitle
              className="
              text-3xl font-bold
              
              " style={{background: 'linear-gradient(to right, #581c87, #4338ca, #3730a3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Use Cases Enabled by Redistribution
              </CardTitle>
              <a 
                href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
                hidden md:inline-flex
                "
                style={{
                  background: 'linear-gradient(to right, rgba(183, 192, 233, 0.1), rgba(87, 132, 255, 0.1))',
                  border: '1px solid #B7C0E9',
                  color: '#1A0C6D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(183, 192, 233, 0.2), rgba(87, 132, 255, 0.2))';
                  e.currentTarget.style.color = '#020F2C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(183, 192, 233, 0.1), rgba(87, 132, 255, 0.1))';
                  e.currentTarget.style.color = '#1A0C6D';
                }}
              >
                <span>Docs</span>
                <ExternalLink
                className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
            </div>
            <a 
                href="https://docs.eigencloud.xyz/products/eigenlayer/concepts/slashing/redistribution" 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
                md:hidden inline-flex
                justify-center flex
                w-[100px]
                justify-center items-center flex
                mx-auto
                "
                style={{
                  background: 'linear-gradient(to right, rgba(183, 192, 233, 0.1), rgba(87, 132, 255, 0.1))',
                  border: '1px solid #B7C0E9',
                  color: '#1A0C6D'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(183, 192, 233, 0.2), rgba(87, 132, 255, 0.2))';
                  e.currentTarget.style.color = '#020F2C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(183, 192, 233, 0.1), rgba(87, 132, 255, 0.1))';
                  e.currentTarget.style.color = '#1A0C6D';
                }}
              >
                <span>Docs</span>
                <ExternalLink
                className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
           
            <CardDescription className="
            text-lg max-w-2xl mx-auto
            mt-4
            md:mt-0
            " style={{color: '#020F2C'}}>
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
        <Card className="mb-16 shadow-xl" style={{background: 'linear-gradient(to bottom right, #ffffff, rgba(87, 132, 255, 0.05))', border: '1px solid #5784FF'}}>
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-6 mx-auto" style={{background: 'linear-gradient(to right, rgba(87, 132, 255, 0.05), rgba(66, 61, 219, 0.05))', borderColor: '#5784FF'}}>
              <Building2 className="h-4 w-4" style={{color: '#423DDB'}} />
              <span className="text-sm font-semibold tracking-wide" style={{color: '#020F2C'}}>Real-World Implementation</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <CardTitle className="text-4xl font-bold" style={{background: 'linear-gradient(to right, #4338ca, #3730a3, #581c87)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Cap Protocol: Redistribution in Action
              </CardTitle>
              <a
                href="https://x.com/capmoney_"
                target="_blank"
                rel="noopener noreferrer"
                className="
                items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
                hidden md:inline-flex
                "
                style={{
                  background: 'linear-gradient(to right, rgba(87, 132, 255, 0.1), rgba(66, 61, 219, 0.1))',
                  border: '1px solid #5784FF',
                  color: '#423DDB'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(87, 132, 255, 0.2), rgba(66, 61, 219, 0.2))';
                  e.currentTarget.style.color = '#020F2C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(87, 132, 255, 0.1), rgba(66, 61, 219, 0.1))';
                  e.currentTarget.style.color = '#423DDB';
                }}
              >
                <span>Learn more</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
            </div>
            <a
                href="https://x.com/capmoney_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md hover:scale-105 group
                md:hidden inline-flex
                justify-center
                w-[150px]
                mx-auto
                mb-2
                "
                style={{
                  background: 'linear-gradient(to right, rgba(87, 132, 255, 0.1), rgba(66, 61, 219, 0.1))',
                  border: '1px solid #5784FF',
                  color: '#423DDB'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(87, 132, 255, 0.2), rgba(66, 61, 219, 0.2))';
                  e.currentTarget.style.color = '#020F2C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, rgba(87, 132, 255, 0.1), rgba(66, 61, 219, 0.1))';
                  e.currentTarget.style.color = '#423DDB';
                }}
              >
                <span>Learn more</span>
                <ExternalLink className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform duration-200" />
              </a>
            <CardDescription className="text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{color: '#020F2C'}}>
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

        {/* Risk Assessment Section */}
        <Card className="mb-16 shadow-xl" style={{background: 'linear-gradient(to bottom right, #ffffff, rgba(220, 38, 38, 0.03))', border: '2px solid #EF4444'}}>
          <CardHeader className="text-center pb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-6 mx-auto" style={{background: 'linear-gradient(to right, rgba(220, 38, 38, 0.05), rgba(239, 68, 68, 0.05))', borderColor: '#EF4444'}}>
              <AlertTriangle className="h-4 w-4" style={{color: '#DC2626'}} />
              <span className="text-sm font-semibold tracking-wide" style={{color: '#020F2C'}}>Risk Assessment</span>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <CardTitle className="text-4xl font-bold" style={{background: 'black', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Higher Risk, Higher Reward
              </CardTitle>
            </div>
            <CardDescription className="text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{color: '#020F2C'}}>
              Redistributable slashing fundamentally changes risk dynamics. Understanding these risks is essential for stakers and capital allocators.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Core Risk Statement */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200/80 shadow-inner">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 shadow-lg mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Increased Slashing Incentives</h3>
                <p className="text-slate-700 max-w-4xl mx-auto leading-relaxed text-lg">
                  <strong>With redistributable slashing, AVSs can now benefit from slashed funds.</strong> This creates stronger incentives to slash operators, 
                  potentially leading to more frequent slashing events. Stakers must carefully evaluate this risk-reward tradeoff.
                </p>
              </div>
            </div>

            {/* Risk Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* For Stakers */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 shadow-lg">
                      <Users className="h-6 w-6 text-red-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Staker Risks</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-red-700 uppercase tracking-wide">HIGHEST IMPACT</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Fund Theft Risk:</strong> Compromised AVS keys can drain allocated stake instead of just burning it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Malicious Operators:</strong> Compromised operators may create malicious AVSs to slash and steal funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Governance Attacks:</strong> Corrupted AVS governance can authorize illegitimate slashing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Collusion Risk:</strong> Operators and AVSs may collude to redistribute funds inappropriately</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* For Operators */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 border-2 border-orange-300 shadow-lg">
                      <Shield className="h-6 w-6 text-orange-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Operator Risks</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-orange-700 uppercase tracking-wide">HIGH IMPACT</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Key Compromise:</strong> Lost keys can enable attackers to register malicious AVSs and steal staker funds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Reputational Damage:</strong> Being slashed in redistributable sets causes severe trust loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Increased Liability:</strong> Higher security requirements and operational complexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      </div>
                      <span><strong>Visibility Changes:</strong> Marked as "Redistributable" affecting stake attraction</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* For AVSs */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 border-2 border-purple-300 shadow-lg">
                      <Building2 className="h-6 w-6 text-purple-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">AVS Risks</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-purple-700 uppercase tracking-wide">MEDIUM IMPACT</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Enhanced Key Management:</strong> Redistribution recipient keys require highest security standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Governance Risks:</strong> Must implement robust fraud proofs and veto mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Precision Attacks:</strong> Risk of precision loss in small magnitude slashing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-4 h-4 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      </div>
                      <span><strong>Design Complexity:</strong> Must carefully balance incentives to prevent abuse</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Risk Mitigation */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-300 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">Built-in Protections</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-emerald-700 uppercase tracking-wide">RISK MITIGATION</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Immutable Recipients:</strong> Redistribution addresses cannot be changed after creation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear Metadata:</strong> All redistributable operator sets are clearly marked</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Opt-in Only:</strong> Participation requires explicit consent from all parties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Allocation Delays:</strong> Time windows for stakers to react to compromised operators</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Risk Assessment Guide */}
            <div className="bg-gradient-to-r from-slate-100 via-red-100 to-orange-100 p-8 rounded-2xl border-2 border-slate-200/50">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-red-200 border-2 border-slate-300 shadow-lg mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Risk Assessment Guidelines</h3>
                <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  Before participating in redistributable slashing, conduct thorough due diligence on all parties involved.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 mx-auto mb-3">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">For Stakers</h4>
                  <p className="text-xs text-slate-600">Carefully evaluate operator reputation, AVS governance, and risk-reward ratios before delegating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 mx-auto mb-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">For Operators</h4>
                  <p className="text-xs text-slate-600">Implement exceptional security practices and only participate in AVSs with robust governance</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">For AVSs</h4>
                  <p className="text-xs text-slate-600">Design with security-first principles, implement delays, and provide clear transparency</p>
                </div>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  )
}